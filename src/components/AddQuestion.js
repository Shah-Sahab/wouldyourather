import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions';


const AddQuestion = (props) => {
    const { register, errors, handleSubmit } = useForm();
    const [submitClicked, setSubmit] = useState(false);
    const onSubmit = data => {
        console.log(data);
        props.dispatch(handleAddQuestion(props.authedUserId, data.optionOne, data.optionTwo));
        setSubmit(true);
    }

    if (submitClicked) {
        return <Redirect to='/' />;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4> Would you Rather??? </h4>

            <label htmlFor="fname">Option 1:</label>
            <input type="text" id="optionOne" name="optionOne" ref={register({required: "Option One Required", minLength: 3})} />
            {errors.optionOne && <p>{errors.optionOne.message}</p>}
            <br />
            <label htmlFor="lname">Option 2:</label>
            <input type="text" id="optionTwo" name="optionTwo" ref={register({required: "Option Two Required", minLength: 3 })} />
            {errors.optionTwo && <p>{errors.optionTwo.message}</p>}
            <br />
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
}

const mapStateToProps = ({ authedUserId }) => {
    return {
        authedUserId
    };
};

export default connect(mapStateToProps)(AddQuestion);