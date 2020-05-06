import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/assigment/assigmentModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import UserAutocompleteFormItem from 'view/iam/autocomplete/UserAutocompleteFormItem';
import SwitchFormItem from 'view/shared/form/items/SwitchFormItem';
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';
import ClassRoomAutocompleteFormItem from 'view/classRoom/autocomplete/ClassRoomAutocompleteFormItem';

const { fields } = model;

class AssigmentForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.codeClass,
    fields.trainerID,
    fields.fromDate,
    fields.toDate,
    fields.status,
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

                <ClassRoomAutocompleteFormItem
                  name={fields.codeClass.name}
                  label={fields.codeClass.label}
                  required={fields.codeClass.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <UserAutocompleteFormItem
                  name={fields.trainerID.name}
                  label={fields.trainerID.label}
                  required={fields.trainerID.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <DatePickerFormItem
                  name={fields.fromDate.name}
                  label={fields.fromDate.label}
                  required={fields.fromDate.required}
                />
                <DatePickerFormItem
                  name={fields.toDate.name}
                  label={fields.toDate.label}
                  required={fields.toDate.required}
                />
                <SwitchFormItem
                  name={fields.status.name}
                  label={fields.status.label}
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

export default AssigmentForm;
