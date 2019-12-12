import React, { Component } from 'react';
import SortableTree, { addNodeUnderParent, removeNodeAtPath } from 'react-sortable-tree';

import './NavBar/Navbar.css';
import CreateTodoDetail from './CreateTodoDetail';

const firstNames = ['Default'];

class CreateNewToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [
        { id: '1', title: 'Chicken', children: [{ title: 'Egg' }] },
        { id: '1', title: 'Fish', children: [{ title: 'fingerline' }] },
        { id: '1', title: 'Dog', children: [{ title: 'Hotdog' }] }
      ],
      todo: ''
    };
  }

  componentDidMount() {
    this.setState({
      treeData: this.props.groupData
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
        {console.log(this.props.groupData)}
        {console.log(this.state.treeData)}
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
