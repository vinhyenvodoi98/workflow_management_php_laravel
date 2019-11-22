import React, { Component } from 'react';
import SortableTree, { addNodeUnderParent, removeNodeAtPath } from 'react-sortable-tree';

import './NavBar/Navbar.css';
import CreateTodoDetail from './CreateTodoDetail';

const firstNames = ['Abraham', 'Adam', 'Agnar', 'Albert', 'Albin', 'Albrecht'];

class CreateNewToDo extends Component {
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
      <div className='form text_align_form'>
        <div className='form-group'>
          <p className='col'>Choice sample Todo :</p>
          <select defaultValue={'DEFAULT'} className='col-3 custom-select' id='inputGroupSelect01'>
            <option value='DEFAULT' disabled>
              Choose...
            </option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>

        <div className='form-group'>
          <p className='col'>Choice group :</p>
          <select defaultValue={'DEFAULT'} className='col-3 custom-select' id='inputGroupSelect01'>
            <option value='DEFAULT' disabled>
              Choose...
            </option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>

        <div className='form-group'>
          <p className='col'>Choose the parent job :</p>
          <select defaultValue={'DEFAULT'} className='col-3 custom-select' id='inputGroupSelect01'>
            <option value='DEFAULT' disabled>
              Choose...
            </option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>

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
