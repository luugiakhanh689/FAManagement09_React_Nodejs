import model from 'modules/classRoom/classRoomModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';


const { fields } = model;

class ClassRoomView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.codeClass.label}
          value={fields.codeClass.forView(record.codeClass)}
        />

        <TextViewItem
          label={fields.className.label}
          value={fields.className.forView(record.className)}
        />

        <TextViewItem
          label={fields.limit.label}
          value={fields.limit.forView(record.limit)}
        />

        <TextViewItem
          label={fields.admin.label}
          value={fields.admin.forView(record.admin)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default ClassRoomView;
