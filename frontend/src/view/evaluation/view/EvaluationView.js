import model from 'modules/evaluation/evaluationModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import UserViewItem from 'view/iam/view/UserViewItem';
import CourseViewItem from 'view/course/view/CourseViewItem';
import TopicViewItem from 'view/topic/view/TopicViewItem';

const { fields } = model;

class EvaluationView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <UserViewItem
          label={fields.trainee.label}
          value={fields.trainee.forView(record.trainee)}
        />

        <CourseViewItem
          label={fields.course.label}
          value={fields.course.forView(record.course)}
        />

        <TopicViewItem
          label={fields.topic.label}
          value={fields.topic.forView(record.topic)}
        />

        <TextViewItem
          label={fields.process.label}
          value={fields.process.forView(record.process)}
        />

        <TextViewItem
          label={fields.timeliness.label}
          value={fields.timeliness.forView(record.timeliness)}
        />

        <TextViewItem
          label={fields.teamwork.label}
          value={fields.teamwork.forView(record.teamwork)}
        />

        <TextViewItem
          label={fields.workquality.label}
          value={fields.workquality.forView(record.workquality)}
        />

        <TextViewItem
          label={fields.presComm.label}
          value={fields.presComm.forView(record.presComm)}
        />

        <TextViewItem
          label={fields.academicMark.label}
          value={fields.academicMark.forView(record.academicMark)}
        />

        <TextViewItem
          label={fields.softskill.label}
          value={fields.softskill.forView(record.softskill)}
        />

        <TextViewItem
          label={fields.attDis.label}
          value={fields.attDis.forView(record.attDis)}
        />

        <TextViewItem
          label={fields.comment.label}
          value={fields.comment.forView(record.comment)}
        />

        <TextViewItem
          label={fields.finalGrade.label}
          value={fields.finalGrade.forView(record.finalGrade)}
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

export default EvaluationView;
