import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import AssigmentForm from 'view/assigment/form/AssigmentForm';
import AssigmentService from 'modules/assigment/assigmentService';
import Errors from 'modules/shared/error/errors';

class AssigmentFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await AssigmentService.create(data);
      const record = await AssigmentService.find(id);
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
        title={i18n('entities.assigment.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <AssigmentForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default AssigmentFormModal;
