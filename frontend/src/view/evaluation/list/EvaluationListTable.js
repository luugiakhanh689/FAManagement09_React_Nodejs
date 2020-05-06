import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/evaluation/list/evaluationListActions';
import destroyActions from 'modules/evaluation/destroy/evaluationDestroyActions';
import selectors from 'modules/evaluation/list/evaluationListSelectors';
import destroySelectors from 'modules/evaluation/destroy/evaluationDestroySelectors';
import model from 'modules/evaluation/evaluationModel';
import evaluationSelectors from 'modules/evaluation/evaluationSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import UserListItem from 'view/iam/list/users/UserListItem';
import CourseListItem from 'view/course/list/CourseListItem';
import TopicListItem from 'view/topic/list/TopicListItem';

const { fields } = model;

class EvaluationListTable extends Component {
  handleTableChange = (pagination, filters, sorter) => {
    const { dispatch } = this.props;

    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  doDestroy = (id) => {
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(id));
  };

  columns = [
    fields.id.forTable(),
    fields.trainee.forTable({
      render: (value) => <UserListItem value={value} />,
    }),
    fields.course.forTable({
      render: (value) => <CourseListItem value={value} />,
    }),
    fields.topic.forTable({
      render: (value) => <TopicListItem value={value} />,
    }),

    fields.process.forTable(),
    fields.timeliness.forTable(),
    fields.workquality.forTable(),

    fields.teamwork.forTable(),

    fields.presComm.forTable(),
    fields.academicMark.forTable(),
    fields.softskill.forTable(),
    fields.attDis.forTable(),
    fields.comment.forTable(),
    fields.finalGrade.forTable(),
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/evaluation/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/evaluation/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {this.props.hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => this.doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  rowSelection = () => {
    return {
      selectedRowKeys: this.props.selectedKeys,
      onChange: (selectedRowKeys) => {
        const { dispatch } = this.props;
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  render() {
    const { pagination, rows, loading } = this.props;

    return (
      <TableWrapper>
        <Table
          rowKey="id"
          loading={loading}
          columns={this.columns}
          dataSource={rows}
          pagination={pagination}
          onChange={this.handleTableChange}
          rowSelection={this.rowSelection()}
          scroll={{ x: true }}
        />
      </TableWrapper>
    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state) ||
      destroySelectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasPermissionToEdit: evaluationSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: evaluationSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(EvaluationListTable);
