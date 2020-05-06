import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import ClassRoomForm from 'view/classRoom/form/ClassRoomForm';
import ClassRoomService from 'modules/classRoom/classRoomService';
import Errors from 'modules/shared/error/errors';

class ClassRoomFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await ClassRoomService.create(data);
      const record = await ClassRoomService.find(id);
      this.props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      this.setState({
        saveLoading: false,
      });
    }
  };

  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <Modal
        title={i18n('entities.classRoom.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <ClassRoomForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default ClassRoomFormModal;
