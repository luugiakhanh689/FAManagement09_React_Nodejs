import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ClassRoomView from 'view/classRoom/view/ClassRoomView';
import { i18n } from 'i18n';
import actions from 'modules/classRoom/view/classRoomViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/classRoom/view/classRoomViewSelectors';
import ClassRoomViewToolbar from 'view/classRoom/view/ClassRoomViewToolbar';

class ClassRoomPage extends Component {
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
            [i18n('entities.classRoom.menu'), '/class-room'],
            [i18n('entities.classRoom.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.classRoom.view.title')}
          </PageTitle>

          <ClassRoomViewToolbar match={this.props.match} />

          <ClassRoomView
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

export default connect(select)(ClassRoomPage);
