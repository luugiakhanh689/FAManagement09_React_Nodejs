import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import EvaluationForm from 'view/evaluation/form/EvaluationForm';
import EvaluationService from 'modules/evaluation/evaluationService';
import Errors from 'modules/shared/error/errors';

class EvaluationFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await EvaluationService.create(data);
      const record = await EvaluationService.find(id);
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
        title={i18n('entities.evaluation.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <EvaluationForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default EvaluationFormModal;
