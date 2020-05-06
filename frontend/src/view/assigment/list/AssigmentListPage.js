import React, { Component } from 'react';
import AssigmentListFilter from 'view/assigment/list/AssigmentListFilter';
import AssigmentListTable from 'view/assigment/list/AssigmentListTable';
import AssigmentListToolbar from 'view/assigment/list/AssigmentListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class AssigmentListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.assigment.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.assigment.list.title')}
          </PageTitle>

          <AssigmentListToolbar />
          <AssigmentListFilter />
          <AssigmentListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default AssigmentListPage;
