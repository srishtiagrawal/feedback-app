import React, { useState } from 'react';
import Card  from './shared/Card'
import Button from './shared/Button'
function FeedbackForm() {
    const[text, setText] = useState('');
    const[btnDisabled, setDisabled] = useState(true);
    const[message, setMessage] = useState('');
    const handleTextChange = (e) => {
        if(text === '') {
            setDisabled(true);
            setMessage(null);
        } else if (text !== ' ' && text.length <=10) {
            setMessage('Please enter atleast 10 characters..');
            setDisabled(true);
            
        }
        else {
            setMessage(null);
            setDisabled(false);
            
        }
        setText(e.target.value)
    }
    return (
        <>
        <Card>
            <form>
                
                    How would you rate your service with us?
                    {/* @todo rating select component */}
                    <div className="input-group">
                        <input onChange={handleTextChange} value={text} type="text" placeholder='Write a review' />
                        <Button type="submit" version="secondary" isDisabled={btnDisabled} >Send</Button>
                    </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
        </>
    )
}
export default FeedbackForm