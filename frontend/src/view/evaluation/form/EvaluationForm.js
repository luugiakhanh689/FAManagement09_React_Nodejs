import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/evaluation/evaluationModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'view/iam/autocomplete/UserAutocompleteFormItem';
import CourseAutocompleteFormItem from 'view/course/autocomplete/CourseAutocompleteFormItem';
import TopicAutocompleteFormItem from 'view/topic/autocomplete/TopicAutocompleteFormItem';

const { fields } = model;

class EvaluationForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.trainee,
    fields.course,
    fields.topic,
    fields.process,
    fields.timeliness,
    fields.teamwork,
    fields.workquality,
    fields.presComm,
    fields.academicMark,
    fields.softskill,
    fields.attDis,
    fields.comment,
    fields.finalGrade,
  ]);

  handleSubmit = (values) => {
    const { id, ...data } = this.schema.cast(values);
    this.props.onSubmit(id, data);
  };

  initialValues = () => {
    const record = this.props.record;
    return this.schema.initialValues(record || {});
  };

  renderForm() {
    const { saveLoading, isEditing } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                {isEditing && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <UserAutocompleteFormItem
                  name={fields.trainee.name}
                  label={fields.trainee.label}
                  required={fields.trainee.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <CourseAutocompleteFormItem
                  name={fields.course.name}
                  label={fields.course.label}
                  required={fields.course.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <TopicAutocompleteFormItem
                  name={fields.topic.name}
                  label={fields.topic.label}
                  required={fields.topic.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <InputFormItem
                  name={fields.process.name}
                  label={fields.process.label}
                  required={fields.process.required}
                />
                <InputFormItem
                  name={fields.timeliness.name}
                  label={fields.timeliness.label}
                  required={fields.timeliness.required}
                />
                <InputFormItem
                  name={fields.workquality.name}
                  label={fields.workquality.label}
                  required={fields.workquality.required}
                />
                <InputFormItem
                  name={fields.teamwork.name}
                  label={fields.teamwork.label}
                  required={fields.teamwork.required}
                />

                <InputFormItem
                  name={fields.presComm.name}
                  label={fields.presComm.label}
                  required={fields.presComm.required}
                />
                <InputFormItem
                  name={fields.academicMark.name}
                  label={fields.academicMark.label}
                  required={fields.academicMark.required}
                />
                <InputFormItem
                  name={fields.softskill.name}
                  label={fields.softskill.label}
                  required={fields.softskill.required}
                />
                <InputFormItem
                  name={fields.attDis.name}
                  label={fields.attDis.label}
                  required={fields.attDis.required}
                />
                <InputFormItem
                  name={fields.comment.name}
                  label={fields.comment.label}
                  required={fields.comment.required}
                />
                <InputFormItem
                  name={fields.finalGrade.name}
                  label={fields.finalGrade.label}
                  required={fields.finalGrade.required}
                />

                <Form.Item
                  className="form-buttons"
                  {...tailFormItemLayout}
                >
                  <Button
                    loading={saveLoading}
                    type="primary"
                    onClick={form.handleSubmit}
                    icon="save"
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    icon="undo"
                  >
                    {i18n('common.reset')}
                  </Button>

                  {this.props.onCancel ? (
                    <Button
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                      icon="close"
                    >
                      {i18n('common.cancel')}
                    </Button>
                  ) : null}
                </Form.Item>
              </Form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (isEditing && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

export default EvaluationForm;
