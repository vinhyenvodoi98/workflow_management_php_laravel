import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import DatePicker from 'react-datepicker';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Select } from 'antd';
import { TreeSelect } from 'antd';

const { Option } = Select;

import 'react-datepicker/dist/react-datepicker.css';

class CreateTodoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      startDate: new Date(),
      endtDate: new Date(),
      start: null,
      end: null,
      responsible_id: [],
      accountable_id: [],
      consulted_id: [],
      informed_id: [],
      priority: '',
      target_id: 2,
      value: undefined,
      treeData: [
        {
          title: 'Support Development team',
          value: '0-0',
          key: '0-0',
          children: [
            {
              title: 'Frontend team',
              value: '0-0-1',
              key: '0-0-1'
            },
            {
              title: 'Backend team',
              value: '0-0-2',
              key: '0-0-2'
            }
          ]
        },
        {
          title: 'Support Party year end',
          value: '0-1',
          key: '0-1'
        }
      ]
    };

    this.handleChange_startDate = this.handleChange_startDate.bind(this);
    this.handleChange_endDate = this.handleChange_endDate.bind(this);
    this.onSelectResponsible = this.onSelectResponsible.bind(this);
    this.onRemoveResponsible = this.onRemoveResponsible.bind(this);
    this.onSelectAccountable = this.onSelectAccountable.bind(this);
    this.onRemoveAccountable = this.onRemoveAccountable.bind(this);
    this.onSelectConsulted = this.onSelectConsulted.bind(this);
    this.onRemoveConsulted = this.onRemoveConsulted.bind(this);
    this.onSelectInformed = this.onSelectInformed.bind(this);
    this.onRemoveInformed = this.onRemoveInformed.bind(this);

    this.handleChangeKPI = this.handleChangeKPI.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);

    this.fetchKPI = this.fetchKPI.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    console.log(value);
    this.setState({ value });
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.todo !== prevProps.todo) {
  //     this.fetchKPI();
  //   }
  // }

  fetchKPI() {
    var token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    axios
      .get('http://localhost:8181/api/user/targets')
      .then(response => {
        console.log(response.data);
        this.setState({ treeData: response.data });
      })
      .catch(err => console.log(err));
  }

  createWork() {
    var token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    var data = {
      name: this.state.name,
      description: this.state.description,
      parent_id: this.props.todo.parent_id,
      group_id: this.props.groupId,
      priority: this.state.priority,
      start_date: this.state.start,
      due_date: this.state.end,
      target_id: this.state.target_id,
      responsible: this.state.responsible_id,
      accountable: this.state.accountable_id,
      consulted: this.state.consulted_id,
      informed: this.state.informed_id
    };
    console.log(data);
    axios
      .post('http://localhost:8181/api/user/groups/group/works', data)
      .then(response => {
        console.log(response);
        this.props.fetchData(this.props.groupId);
        this.notifyA();
      })
      .catch(err => this.notifyA());
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  handleChange_startDate(date) {
    this.setState({
      startDate: date,
      start: this.formatDate(date)
    });
  }

  handleChange_endDate(date) {
    this.setState({
      endtDate: date,
      end: this.formatDate(date)
    });
  }

  onSelectResponsible(optionsList, selectedItem) {
    this.setState({
      responsible_id: [...this.state.responsible_id, selectedItem.id]
    });
  }
  onRemoveResponsible(optionList, removedItem) {}
  onSelectAccountable(optionsList, selectedItem) {
    this.setState({
      accountable_id: [...this.state.accountable_id, selectedItem.id]
    });
  }
  onRemoveAccountable(optionList, removedItem) {}
  onSelectConsulted(optionsList, selectedItem) {
    this.setState({
      consulted_id: [...this.state.consulted_id, selectedItem.id]
    });
  }
  onRemoveConsulted(optionList, removedItem) {}
  onSelectInformed(optionsList, selectedItem) {
    this.setState({
      informed_id: [...this.state.informed_id, selectedItem.id]
    });
  }
  onRemoveInformed(optionList, removedItem) {}

  handleChangeKPI(value) {
    this.setState({ target_id: value });
  }

  handleChangePriority(value) {
    this.setState({ priority: value });
  }

  notifyA() {
    toast.success('Successfully !', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  render() {
    return (
      <div>
        <ToastContainer enableMultiContainer position={toast.POSITION.TOP_RIGHT} />
        {this.props.todo !== null ? (
          <div>
            <div className='form-group'>
              <p>Name :</p>
              <div className=''>
                <input
                  type='text'
                  className='form-control col-6'
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </div>
            </div>
            <div className='form-group'>
              <p>Description :</p>
              <textarea
                type='text'
                className='form-control col-6'
                id='usr'
                onChange={e => this.setState({ description: e.target.value })}
              />
            </div>
            <div className='form-group'>
              <p>Responsible :</p>
              <div className='non-padding col-6 select_backgroud'>
                <Multiselect
                  options={this.props.LoginStatus.users} // Options to display in the dropdown
                  onSelect={this.onSelectResponsible} // Function will trigger on select event
                  onRemove={this.onRemoveResponsible} // Function will trigger on remove event
                  displayValue='name' // Property name to display in the dropdown options
                />
              </div>
            </div>
            <div className='form-group'>
              <p>Accountable :</p>
              <div className='non-padding col-6 select_backgroud'>
                <Multiselect
                  options={this.props.LoginStatus.users} // Options to display in the dropdown
                  onSelect={this.onSelectAccountable} // Function will trigger on select event
                  onRemove={this.onRemoveAccountable} // Function will trigger on remove event
                  displayValue='name' // Property name to display in the dropdown options
                />
              </div>
            </div>
            <div className='form-group'>
              <p>Consulted :</p>
              <div className='non-padding col-6 select_backgroud'>
                <Multiselect
                  options={this.props.LoginStatus.users} // Options to display in the dropdown
                  onSelect={this.onSelectConsulted} // Function will trigger on select event
                  onRemove={this.onRemoveConsulted} // Function will trigger on remove event
                  displayValue='name' // Property name to display in the dropdown options
                />
              </div>
            </div>
            <div className='form-group'>
              <p>Informed :</p>
              <div className='non-padding col-6 select_backgroud'>
                <Multiselect
                  options={this.props.LoginStatus.users} // Options to display in the dropdown
                  onSelect={this.onSelectInformed} // Function will trigger on select event
                  onRemove={this.onRemoveInformed} // Function will trigger on remove event
                  displayValue='name' // Property name to display in the dropdown options
                />
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-4'>
                <p>Start :</p>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange_startDate}
                />
              </div>
              <div className='col-4'>
                <p>End :</p>
                <DatePicker selected={this.state.endtDate} onChange={this.handleChange_endDate} />
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='form-group col' style={{ paddingLeft: '0px' }}>
                  <p>Priority :</p>
                  <Select
                    defaultValue='DEFAULT'
                    classNam='col-6'
                    onChange={this.handleChangePriority}
                  >
                    <Option value='low'>Low</Option>
                    <Option value='medium'>Medium</Option>
                    <Option value='high'>High</Option>
                  </Select>
                </div>
                <div className='form-group col'>
                  <p>KPI :</p>
                  <TreeSelect
                    style={{ width: '100%' }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    // filterTreeNode={true}
                    // treeNodeLabelProp={'name'}
                    treeData={this.state.treeData}
                    placeholder='Please select'
                    treeDefaultExpandAll
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>

            <div className='form-group'>
              <div className='col'>
                <div className='row justify-content-end'>
                  <button className='btn' onClick={() => this.createWork()}>
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    LoginStatus: state.LoginStatus
  };
};

export default compose(connect(mapStatetoProps))(CreateTodoDetail);
