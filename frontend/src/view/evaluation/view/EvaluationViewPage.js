import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import EvaluationView from 'view/evaluation/view/EvaluationView';
import { i18n } from 'i18n';
import actions from 'modules/evaluation/view/evaluationViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/evaluation/view/evaluationViewSelectors';
import EvaluationViewToolbar from 'view/evaluation/view/EvaluationViewToolbar';

class EvaluationPage extends Component {
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
            [i18n('entities.evaluation.menu'), '/evaluation'],
            [i18n('entities.evaluation.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.evaluation.view.title')}
          </PageTitle>

          <EvaluationViewToolbar match={this.props.match} />

          <EvaluationView
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

export default connect(select)(EvaluationPage);
