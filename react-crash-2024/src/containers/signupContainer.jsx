import {connect} from 'react-redux';
import { signed_up } from '../Services/Actions/actions';
import SignUpForm from '../components/SignUpForm';

const mapStateToProps=(state)=>{
    signup:state.isSignup
}

const mapDispatchToProps = dispatch=>({
    signed_up:data=>dispatch(signed_up(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm)