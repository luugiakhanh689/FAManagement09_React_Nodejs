import React, { Component } from 'react';
import EvaluationListFilter from 'view/evaluation/list/EvaluationListFilter';
import EvaluationListTable from 'view/evaluation/list/EvaluationListTable';
import EvaluationListToolbar from 'view/evaluation/list/EvaluationListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class EvaluationListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.evaluation.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.evaluation.list.title')}
          </PageTitle>

          <EvaluationListToolbar />
          <EvaluationListFilter />
          <EvaluationListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default EvaluationListPage;
