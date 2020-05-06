import React, { Component } from 'react';
import ClassRoomListFilter from 'view/classRoom/list/ClassRoomListFilter';
import ClassRoomListTable from 'view/classRoom/list/ClassRoomListTable';
import ClassRoomListToolbar from 'view/classRoom/list/ClassRoomListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ClassRoomListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.classRoom.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.classRoom.list.title')}
          </PageTitle>

          <ClassRoomListToolbar />
          <ClassRoomListFilter />
          <ClassRoomListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default ClassRoomListPage;
