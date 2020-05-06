import React, { Component } from 'react';
import TopicListFilter from 'view/topic/list/TopicListFilter';
import TopicListTable from 'view/topic/list/TopicListTable';
import TopicListToolbar from 'view/topic/list/TopicListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class TopicListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.topic.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.topic.list.title')}
          </PageTitle>

          <TopicListToolbar />
          <TopicListFilter />
          <TopicListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default TopicListPage;
