import { createSlice } from "@reduxjs/toolkit";
import { auth, firestore } from "../../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";



const initialState = {
  exercises: [],
};

export const useExercises = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    setExercises: (state, action) => {
      state.exercises = action.payload;
    },
  },
});

export const { setExercises } = useExercises.actions;
export default useExercises.reducer;

// ----------------------------------------------------------------

//Create

export const createAsync = async (value) => {
  try {
    const response = await addDoc(collection(firestore, "Legs"), value);
    if (response) {
      console.log("Documento creado con ID: ", response.id);
      console.log(response);
    }
  } catch (error) {
    console.error("Hubo un error: " + error);
  }
};

// Actions (funciones)

export const mailRegister = async ({ name, email, photoURL, password }) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (response) {
      await updateProfile(response.user, {
        displayName: name,
        photoURL: photoURL || "",
      });
      return {
        displayName: response.user.displayName,
        email: response.user.email,
        photoURL: response.user.photoURL,
        isAuthenticated: true,
      };
    }
  } catch (error) {
    console.error("Hubo un error: " + error);
  }
};

// Read
export const readAsync = async () => {
  const datos = [];
  try {
    const exercises = await getDocs(collection(firestore, "exercises"));
    exercises.forEach((item) => {
      datos.push({
        ...item.data(),
      });
    });
    return datos;
  } catch (error) {
    console.error(error);
  }
};

// Update
export const updateAsync = async (newData) => {
  console.log(newData);
  const moviesCollection = collection(firestore, "exercises");
  const movieQuery = query(moviesCollection, where("id", "==", newData.id));

  const queriedData = await getDocs(movieQuery);
  let id;

  queriedData.forEach((item) => {
    id = item.id;
  });

  const docRef = doc(firestore, "exercises", id);
  console.log(docRef);

  const response = await updateDoc(docRef, newData);
};

// Delete
export const deleteAsync = async (id) => {
  try {
    const moviesCollection = collection(firestore, "peliculas");
    const movieQuery = query(moviesCollection, where("id", "==", id));

    const datos = await getDocs(movieQuery);

    datos.forEach((item) => {
      deleteDoc(doc(firestore, "peliculas", item.id));
    });
  } catch (error) {
    console.error(error);
  }
};
