import React, { Component } from 'react';
import CourseListFilter from 'view/course/list/CourseListFilter';
import CourseListTable from 'view/course/list/CourseListTable';
import CourseListToolbar from 'view/course/list/CourseListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class CourseListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.course.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.course.list.title')}
          </PageTitle>

          <CourseListToolbar />
          <CourseListFilter />
          <CourseListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default CourseListPage;
