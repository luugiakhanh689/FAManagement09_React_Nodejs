import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import CourseView from 'view/course/view/CourseView';
import { i18n } from 'i18n';
import actions from 'modules/course/view/courseViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/course/view/courseViewSelectors';
import CourseViewToolbar from 'view/course/view/CourseViewToolbar';

class CoursePage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.course.menu'), '/course'],
            [i18n('entities.course.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.course.view.title')}
          </PageTitle>

          <CourseViewToolbar match={this.props.match} />

          <CourseView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(CoursePage);
