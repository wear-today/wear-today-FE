import { auth, firebaseInstance } from '../firebase'
import {
  signInWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider, signInWithPopup 
} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import  {useState} from 'react';

function Login(){
  const navigate = useNavigate();
 const [email, setEmail] = useState('')
 console.log(email,'email')
const [password, setPassword] = useState('')

console.log(password,'password')
const onChange = (event) => {
  const {
    target: { name, value }
  } = event
  if (name === 'email') {
    setEmail(value)
  } else if (name === 'password') {
    setPassword(value)
  }
}

const onSubmit = (event) => {
  event.preventDefault()
  signInWithEmailAndPassword(
    auth,
    email,
    //displayName,
    password
);
navigate("/")
alert('로그인완료')
}

const onSocailClick = async(event) => {
  const {target:{name}} = event
  let provider
  if(name ==="google"){
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    const data = await signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data); // console에 UserCredentialImpl 출력
      })
  }else if (name ==="github"){
    const provider = new GithubAuthProvider(); // provider 구글 설정
    const data = await signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data); // console에 UserCredentialImpl 출력
      })
  }
  await auth.signInWithPopup(provider)
  
}

return (
    <div className="loginWrap">
      <form className="login" onSubmit={onSubmit}>
        <h2>Log-in</h2>
        <div className="login_id">
        <h4>E-mail</h4>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        </div>
        <div className="login_pw">
        <h4>Password</h4>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        </div>
        <div className="submit">
        <input type="submit" value="Log-In" />
        </div>
        <div className='Join'>
            <a href='/Join'>회원가입</a>
        </div>
      
        <div className="login_sns">
          <li>
            <a href=""><button name='google' onClick={onSocailClick}>Continue with Google</button></a>
          </li>
          <li>
            <a href=""><button name='github' onClick={onSocailClick}>Continue with github</button></a>
          </li>
        </div>
      </form>
    </div>
  )

}

export default Login