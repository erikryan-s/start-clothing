import firestore from "../firebase.js";
import data from "../services/data";

//CRUD - Create Read Update Delete

// CREATE

// record - object containing the data we want to send to the DB

export const addCartItem = async (record) => {
    const collectionRef = firestore.collection("cart");
    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference#add
    // Add a new document to this collection with the specified data, assigning it a document ID automatically.
    await collectionRef.add(record);
};

// How do we seed a database with information from our machine

export const seedProducts = async () => {
    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.Firestore#collection
    // Getting Collection Reference instance for the students collection
    const collectionRef = firestore.collection("products");
    // Returns Promise<QuerySnapshot<T>>
    const data = await collectionRef.get();

    // Checking if database is empty or not
    if (!data.empty) {
        return;
    }

    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference#add
    // Grabbing every student object in our array and adding it to the 'students' collection (id db)
    const promises = students.map(async (product) => {
        return await collectionRef.add(product);
    });

    await Promise.all(promises);
};

// READ - Getting documents in our DB

export const getProducts = async () => {
    await seedProducts();

    // Firestore.collection
    // - https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore#collection
    // Returns a CollectionReference
    const collectionRef = firestore.collection("products");

    // QuerySnapshot
    // (https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QuerySnapshot)
    const queryData = await collectionRef.get();

    // Returns An array of all the documents in the QuerySnapshot.
    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QuerySnapshot#docs
    const documents = queryData.docs;

    // data() > Return an object with all the fields in the doc (apart from id)
    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QueryDocumentSnapshot#data
    const data = documents.map((doc) => ({ id: doc.id, ...doc.data() }));

    // Returning an array of students with their unique IDs.
    return data;
};

// UPDATE - Update a single document in our DB
export const updateProducts = async (id, record) => {
    // record = data we want to update our doc with
    const collectionRef = firestore.collection("products");
    // Getting a Doc Refercence
    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference#doc
    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};

// DELETE - deleting a student in our DB

export const deleteProduct = async (id) => {
    // Getting CollectionRef then DocRef
    const docRef = firestore.collection("products").doc(id);
    // Deleting the Doc refered in the Reference
    await docRef.delete();
};
