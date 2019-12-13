import React, { Component } from 'react';
import SortableTree, { addNodeUnderParent, removeNodeAtPath } from 'react-sortable-tree';

import './NavBar/Navbar.css';
import CreateTodoDetail from './CreateTodoDetail';

const firstNames = ['Default'];

class CreateNewToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [],
      id: 0,
      todo: ''
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.groupId !== prevProps.groupId) {
      this.fetchData(this.props.groupId);
    }
  }

  fetchData() {
    var token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    var url = 'http://localhost:8181/api/user/groups/' + this.props.groupId + '/works/basic_info';

    axios.get(url).then(response => {
      // handle success
      this.setState({ treeData: response.data });
    });
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
      <div className='form text_align_form'>
        <div className='form-group treeview'>
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
                  }
                >
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
                  }
                >
                  Remove
                </button>
              ],
              onClick: () => {
                this.handleNodeClick(node);
              }
            })}
          />
        </div>

        <CreateTodoDetail todo={this.state.todo} />
      </div>
    );
  }
}

export default CreateNewToDo;
