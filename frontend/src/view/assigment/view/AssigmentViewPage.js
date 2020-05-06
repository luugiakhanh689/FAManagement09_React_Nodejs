import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import AssigmentView from 'view/assigment/view/AssigmentView';
import { i18n } from 'i18n';
import actions from 'modules/assigment/view/assigmentViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/assigment/view/assigmentViewSelectors';
import AssigmentViewToolbar from 'view/assigment/view/AssigmentViewToolbar';

class AssigmentPage extends Component {
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
            [i18n('entities.assigment.menu'), '/assigment'],
            [i18n('entities.assigment.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.assigment.view.title')}
          </PageTitle>

          <AssigmentViewToolbar match={this.props.match} />

          <AssigmentView
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

export default connect(select)(AssigmentPage);
