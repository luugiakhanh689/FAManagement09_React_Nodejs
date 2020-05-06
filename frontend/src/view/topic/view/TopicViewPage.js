import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import TopicView from 'view/topic/view/TopicView';
import { i18n } from 'i18n';
import actions from 'modules/topic/view/topicViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/topic/view/topicViewSelectors';
import TopicViewToolbar from 'view/topic/view/TopicViewToolbar';

class TopicPage extends Component {
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
            [i18n('entities.topic.menu'), '/topic'],
            [i18n('entities.topic.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.topic.view.title')}
          </PageTitle>

          <TopicViewToolbar match={this.props.match} />

          <TopicView
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

export default connect(select)(TopicPage);
