import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "../../firebase/firebaseConfig";

const initialState = {
  displayName: "",
  email: "",
  photoURL: "",
  isAuthenticated: false,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL || "";
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

// Acción asíncrona para verificar el estado de autenticación
export const checkUserAuth = createAsyncThunk(
  "user/checkUserAuth",
  async (_, { rejectWithValue }) => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            resolve(user);
          } else {
            resolve(null);
          }
          unsubscribe();
        },
        reject
      );
    });
  }
);

export const { setUser } = userReducer.actions;
export default userReducer.reducer;

// ----------------------------------------------------------------

// Actions (funciones)

export const mailRegister = async ({ name, email, photoURL, password }) => {
  if (!password || password.length < 6) {
    throw new Error("La contraseña debe tener al menos 6 caracteres.");
  }

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (response && response.user) {
      await updateProfile(response.user, {
        displayName: name,
        photoURL: photoURL || "",
      });
      return {
        displayName: response.user.displayName || "",
        email: response.user.email || "",
        photoURL: response.user.photoURL || "",
        isAuthenticated: true,
      };
    }
  } catch (error) {
    // Verifica el código del error para determinar si es por correo ya registrado
    if (error.code === "auth/email-already-in-use") {
      throw new Error("El correo electrónico ya está registrado.");
    }
    throw new Error(error.message); // Lanzar cualquier otro error
  }
};

export const mailLogin = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (response && response.user) {
      return {
        displayName: response.user.displayName || "",
        email: response.user.email || "",
        photoURL: response.user.photoURL || "",
        isAuthenticated: true,
      };
    }
  } catch (error) {
    console.error("Hubo un error al iniciar sesión: " + error.message);
  }
};

export const googleLogin = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    if (response && response.user) {
      return {
        displayName: response.user.displayName || "",
        email: response.user.email || "",
        photoURL: response.user.photoURL || "",
        isAuthenticated: true,
      };
    }
  } catch (error) {
    console.error(
      "Hubo un error al iniciar sesión con Google: " + error.message
    );
  }
};

export const facebookLogin = async () => {
  try {
    const response = await signInWithPopup(auth, facebookProvider);
    if (response && response.user) {
      return {
        displayName: response.user.displayName || "",
        email: response.user.email || "",
        photoURL: response.user.photoURL || "",
        isAuthenticated: true,
      };
    }
  } catch (error) {
    console.error(
      "Hubo un error al iniciar sesión con Facebook: " + error.message
    );
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Hubo un error al hacer logout: " + error.message);
  }
};
