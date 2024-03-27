const firebaseConfig = {
    apiKey: "AIzaSyBnm8gku164j-OjZDt-A6ElqVsK_P8e_R0",
    authDomain: "jobapp-ad828.firebaseapp.com",
    projectId: "jobapp-ad828",
    storageBucket: "jobapp-ad828.appspot.com",
    messagingSenderId: "842845326650",
    appId: "1:842845326650:web:f6dc0615d61394b8829403",
    measurementId: "G-PNCF77RELT"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref as sRef, get, set, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase();
const storage = getStorage();

function uploadFile(node, file)
{
    const storageRef = ref(storage, node);
    return uploadBytes(storageRef, file);
}

function uploadMultipleFiles(nodes, files)
{
    let promises = [];

    for (let index in nodes)
    {
        let node = nodes[index];
        node = node.replace('SLASH', '/')
        promises.push(uploadFile(node, files[index]));
    }

    for (let i = 0; i < files.length; i++)
    {
        promises.push()
    }

    return Promise.all(promises);
}

async function downloadFile(node, referenceMode = false)
{
    if (!referenceMode)
    {
        return await getDownloadURL(ref(storage, node))
            .then((url) =>
            {
                return url;
            });
    }
    else
    {
        return await getDownloadURL(node)
            .then((url) =>
            {
                return url;
            });
    }
}

async function downloadMultipleFiles(nodes, referenceMode = false)
{
    let srcMap = {}
    let promises = [];

    for (let index in nodes)
    {
        let node = nodes[index];
        if (!referenceMode)
        {
            node = node.replace('SLASH', '/')
            promises.push(getDownloadURL(ref(storage, node)));
        }
        else
        {
            promises.push(getDownloadURL(node));
        }
    }

    let urls = await Promise.all(promises);
    for (let i = 0; i < nodes.length; i++)
    {
        srcMap[nodes[i]] = urls[i];
    }

    return srcMap
}

async function downloadFolder(folder)
{
    folder = folder.replace('SLASH', '/')
    const listRef = ref(storage, folder);
    let list = await listAll(listRef);
    let srcs = await downloadMultipleFiles(list['items'], true);

    return srcs;
}

async function uploadToFolder(folder, files)
{
    folder = folder.replace('SLASH', '/')
    const listRef = ref(storage, folder);
    let list = await listAll(listRef);
    let listLength = list['items'].length;
    let nodes = []
    for (let i = 0; i < files.length; i++)
    {
        nodes.push(folder + '/' + (listLength - 1 + i))
    }

    let uploaded = await uploadMultipleFiles(nodes, files)
    let references = []
    for (let index of uploaded)
    {
        references.push(index['ref'])
    }
    return references;
}

function listenForData(nodeToListen, functionToCall, arg = false)
{
    const ref = sRef(database, nodeToListen);

    onValue(ref, (snapshot) =>
    {
        const value = snapshot.val();

        if (arg)
        {
            functionToCall(value)
        }
        else
        {
            functionToCall()
        }
    });
}

function pushNode(node, value)
{
    const userRef = sRef(database, node);
    return push(userRef, value)
        .then(() =>
        {
            console.log('Node push successfully.', value);
            return true
        })
        .catch((error) =>
        {
            console.error('Error pushing node:', error);
            return null
        });
}

function setNode(node, value)
{
    const userRef = sRef(database, node);

    return set(userRef, value)
        .then(() =>
        {
            console.log('Node set successfully.');
            return true
        })
        .catch((error) =>
        {
            console.error('Error setting node:', error);
            return null
        });
}

function deleteNode(node)
{
    const userRef = sRef(database, node);

    return remove(userRef).then(() =>
    {
        console.log('removed')
    });
}

function getNode(node)
{
    const userRef = sRef(database, node);

    var data = null
    return get(userRef).then((snapshot) =>
    {
        if (snapshot.exists())
        {
            console.log('got node')
            return snapshot.val();
        } else
        {
            console.log("No data available");
            return null
        }
    }).catch((error) =>
    {
        console.error(error);
    });
}

export { getNode, setNode, pushNode, listenForData, deleteNode, uploadFile, downloadFile, downloadFolder, downloadMultipleFiles, uploadMultipleFiles, uploadToFolder };