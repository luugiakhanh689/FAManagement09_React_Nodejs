import model from 'modules/course/courseModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ClassRoomViewItem from 'view/classRoom/view/ClassRoomViewItem';

const { fields } = model;

class CourseView extends Component {
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

        <TextViewItem
          label={fields.iDCourse.label}
          value={fields.iDCourse.forView(record.iDCourse)}
        />

        <TextViewItem
          label={fields.courseName.label}
          value={fields.courseName.forView(record.courseName)}
        />

        <TextViewItem
          label={fields.lectureName.label}
          value={fields.lectureName.forView(record.lectureName)}
        />

        <TextViewItem
          label={fields.fromTime.label}
          value={fields.fromTime.forView(record.fromTime)}
        />

        <TextViewItem
          label={fields.toTime.label}
          value={fields.toTime.forView(record.toTime)}
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

export default CourseView;
