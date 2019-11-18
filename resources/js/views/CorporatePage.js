import React, { Component } from 'react';
import SortableTree, { addNodeUnderParent, removeNodeAtPath } from 'react-sortable-tree';

import './CreateTodoPage.css';
import GroupForm from '../components/GroupForm';

const firstNames = ['Abraham', 'Adam', 'Agnar', 'Albert', 'Albin'];

class CorporatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [
        { title: 'Chicken', children: [{ title: 'Egg' }] },
        { title: 'Fish', children: [{ title: 'fingerline' }] },
        { title: 'Dog', children: [{ title: 'Hotdog' }] }
      ],
      todo: ''
    };
  }

  handleNodeClick(node) {
    this.setState({
      todo: node.title
    });
  }

  render() {
    const getNodeKey = ({ treeIndex }) => treeIndex;
    const getRandomName = () => firstNames[Math.floor(Math.random() * firstNames.length)];
    return (
      <div className='container'>
        <div className='underNav'></div>
        <div className='row'>
          <div className='col-3'>
            <div className='sidebar-item'>
              <div className='make-me-sticky'>
                <div className='item'>
                  <h4 className='h4'>
                    <strong>Your Department</strong>
                  </h4>
                  <div className='treeview-nav'>
                    <SortableTree
                      treeData={this.state.treeData}
                      onChange={treeData => this.setState({ treeData })}
                      generateNodeProps={({ node, path }) => ({
                        buttons: [
                          <button
                            onClick={() =>
                              this.setState(state => ({
                                treeData: addNodeUnderParent({
                                  treeData: state.treeData,
                                  parentKey: path[path.length - 1],
                                  expandParent: true,
                                  getNodeKey,
                                  newNode: {
                                    title: `${getRandomName()} ${node.title.split(' ')[0]}`
                                  },
                                  addAsFirstChild: state.addAsFirstChild
                                }).treeData
                              }))
                            }>
                            Add Child
                          </button>,
                          <button
                            onClick={() =>
                              this.setState(state => ({
                                treeData: removeNodeAtPath({
                                  treeData: state.treeData,
                                  path,
                                  getNodeKey
                                })
                              }))
                            }>
                            Remove
                          </button>
                        ],
                        onClick: () => {
                          this.handleNodeClick(node);
                        }
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-9'>
            <div className='content-section'>
              <h2 className='h4'>Corporate Structure Department</h2>
              <GroupForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CorporatePage;
