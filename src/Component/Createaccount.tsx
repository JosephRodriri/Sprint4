import '../assets/style/css/Font.css'
import TextField from '@mui/material/TextField'
import '../assets/style/css/Createaccount.css'
import {
  Contenedormain,
  Contenedortwe,
  Contenedorinput,
  Boton
} from '../assets/style/stylecomponets/styled.js'

export function Createaccount () {
  // const { setUser } = useContext(UserContext)
  // const navigate = useNavigate()
  // const [formValues, handleInputChange, reset] = useForm({
  //   name: '',
  //   email: '',
  //   password: ''
  // })

  // async function handleSubmit (e) {
  //   e.preventDefault()
  //   const newUser = {
  //     ...formValues,
  //     id: crypto.randomUUID()
  //   }
  //   setUser({ name: formValues.name, email: formValues.email })
  //   await axios
  //     .post('https://fooddeliveryapi-uco3.onrender.com/users', newUser)
  //     .then(response => (response.status === 201 ? navigate('/login') : null))
  // }

  return (
    <Contenedormain>
      <div>
        <h2>Create account</h2>
      </div>
      <Contenedorinput >
        <TextField
          // onChange={handleInputChange}
           // value={formValues.name}
          name='name'
          id='standard-basic'
          required
          label='NAME'
          type='text'
          variant='standard'
        />
        <TextField
          // onChange={handleInputChange}
           //  // value={formValues.email}
          name='email'
          id='standard-basic'
          required
          label='EMAIL'
          type='email'
          variant='standard'
        />
        <TextField
          // onChange={handleInputChange}
           // value={formValues.password}
          name='password'
          id='standard-basic'
          required
          label='PASSWORD'
          type='password'
          variant='standard'
        />
        <Contenedortwe>
          <Boton type='submit'>Sing In</Boton>
          {/* <Link to={"/map"}>
         
        </Link> */}
        </Contenedortwe>
      </Contenedorinput>
    </Contenedormain>
  )
}
