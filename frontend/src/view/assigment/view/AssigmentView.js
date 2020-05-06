import model from 'modules/assigment/assigmentModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import UserViewItem from 'view/iam/view/UserViewItem';
import ClassRoomViewItem from 'view/classRoom/view/ClassRoomViewItem';

const { fields } = model;

class AssigmentView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <ClassRoomViewItem
          label={fields.codeClass.label}
          value={fields.codeClass.forView(record.codeClass)}
        />

        <UserViewItem
          label={fields.trainerID.label}
          value={fields.trainerID.forView(record.trainerID)}
        />

        <TextViewItem
          label={fields.fromDate.label}
          value={fields.fromDate.forView(record.fromDate)}
        />

        <TextViewItem
          label={fields.toDate.label}
          value={fields.toDate.forView(record.toDate)}
        />

        <TextViewItem
          label={fields.status.label}
          value={fields.status.forView(record.status)}
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

export default AssigmentView;
