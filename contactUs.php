<?php include 'header.php'; ?>
<div class="container">
    <h1 className="p-heading1">Get in Touch</h1> 
    <Form onSubmit = { this.handleSubmit.bind(this) } >
        <FormGroup controlId="formBasicEmail">
          <Label className="text-muted">Email address</Label>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            className="text-primary"
            onChange={this.handleChange.bind(this, 'email')}
            placeholder="Enter email"
          />
        </FormGroup> 
    	<FormGroup controlId = "formBasicName" >
    	<Label className="text-muted">Name</Label>
    	<Input type = "text" name = "name" value = { this.state.name } className = "text-primary" onChange = { this.handleChange.bind(this, 'name') } placeholder = "Name" / >
        </FormGroup>   
        <FormGroup controlId = "formBasicSubject" >
            <Label className="text-muted">Subject</Label> <
            Input type = "text"
            name = "subject"
            className = "text-primary"
            value = { this.state.subject } onChange = { this.handleChange.bind(this, 'subject') } placeholder = "Subject" / >
        </FormGroup>   
        <FormGroup controlId = "formBasicMessage" >
        	<Label className="text-muted">Message</Label> 
        	<Input type = "textarea" name = "message" className = "text-primary" value = { this.state.message } onChange = { this.handleChange.bind(this, 'message') }/>  
        </FormGroup >
    	<Button variant = "primary"
        type = "submit" >
        Submit 
        </Button> 
    </Form>
</div>
<?php include 'footer.php'; ?>