
const CardsCreatePanel=React.createClass({
  getInitialState:function(){
    return {
      prioritySelected:'100'
    }
  }
  ,submitIt:function(e){
    var formData=$('form').serialize();
    console.log(formData);
    e.preventDefault();
    $.ajax({
      url:"/create",
      dataType:'text', //'json'
      type:'Post',
      data:formData,
      success:function(data){
        this.setState({data:data});
        console.log('Succes through Ajax' + data);
      }.bind(this),
      error:function(xhr,status,err){
        console.log('Error through Ajax');        
      }.bind(this)

    });

    console.log('Submit Test in here');
  }
  ,selectPriority:function(){
    console.log('Changed');
    console.log($('#prioritySelect').val());
  }
  ,render:function(){
    if(!this.props.priorityData.length){
      return null;
    }
    
    const optionsPriorities=this.props.priorityData.map(function(item,index){
              return (<option value={item.id} key={item.id}>{item.priority}</option>);
            });

    const optionsUsers=this.props.userData.map(function(item,index){
              return (<option value={item.id} key={item.id}>{item.first_name}</option>);
            });

    return (
      <form className="createForm" onSubmit={this.submitIt}>
        <fieldset>
          <legend>Create New Card</legend>
          <p>Title:<input type="text" name="title" placeholder="Please enter Title" /></p>
          <p>Priority<input type="text" name="priority_text" />
          <select id="prioritySelect" name="priority" onChange={this.selectPriority} defaultValue={this.state.prioritySelected} >
            {optionsPriorities}
          </select>
          </p>
          <p>Status<input type="text" name="status" defaultValue={this.props.priorityData[1].id} /></p>
          <p>Created By<input type="text" name="createdBy" defaultValue="Defaults to current user" disabled="disabled"/></p>
          <p>Assigned To<input type="text" name="assignedTo_Text" />
          <select name="assignedTo">
            {optionsUsers}
          </select>
          </p>
          <hr/>
          <input type="submit" value="Send It!" />
        </fieldset>
         <h1>this.state.test</h1>
      </form>     
      )
  }
})


const CardsPanel=React.createClass({
  getInitialState(){
    return {
      priorityData:[]
      ,userData:[]
    };
  }
  ,loadSelectionDataHandler: function(){
    console.log('On Submit Handler');
    
    $.get("/getPriorities",
      (data) => {
        console.log('InPRi');
        this.setState({priorityData:data});
      });


    $.get("/getUsers",
      (data) => {
        this.setState({userData:data});
      })
      
  }
  ,componentDidMount:function(){
    this.loadSelectionDataHandler();
  }
  ,render:function(){
    return (      
      <div className="Cards">
        <CardsCreatePanel priorityData={this.state.priorityData} userData={this.state.userData} ></CardsCreatePanel>  
      </div>      
    )
  }
})

ReactDOM.render(
  <CardsPanel />,
  document.getElementById('kanbanPanel'))