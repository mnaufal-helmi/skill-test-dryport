import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import ModalAdd from '../components/ModalAdd';
import ModalDell from '../components/ModalDell';
import ModalUpdate from '../components/ModalUpdate';
import ContentTabel from '../components/Table';

const window = Dimensions.get('window');

const HomeScreen = () => {
  const [modal, setModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [add, setAdd] = useState(false);
  const [text, setText] = useState();
  const [users, setUsers] = useState([]);

  const inputElement = useRef();

  const clearInput = () => {
    inputElement.current.clear();
  };
  return (
    <>
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.viewTxtInput}>
            <View style={style.viewImg}>
              <Image
                style={style.imgSearch}
                source={require('../assets/png/search.png')}
              />
            </View>
            <TextInput
              style={style.txtInput}
              placeholder="Search Here"
              placeholderTextColor={'black'}
              onChangeText={setText}
              ref={inputElement}
            />
            {text ? (
              <TouchableOpacity
                style={style.viewClose}
                onPress={() => setText(clearInput)}>
                <Image
                  source={require('../assets/png/close.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>

        <ContentTabel />
      </View>

      <View style={style.footer}>
        <TouchableOpacity
          style={style.viewFooter}
          onPress={() => {
            setModal(true);
          }}>
          <Image
            style={style.imgFooter}
            source={require('../assets/png/trash.png')}
          />
          <ModalDell
            visible={modal}
            onCancel={() => {
              setModal(false);
            }}
            onConfirm={() => {}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={style.viewFooter}
          onPress={() => {
            setUpdate(true);
          }}>
          <Image
            style={style.imgFooter}
            source={require('../assets/png/edit.png')}
          />
          <ModalUpdate
            visible={update}
            onCancel={() => {
              setUpdate(false);
            }}
            onConfirm={() => {}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={style.viewFooter}
          onPress={() => {
            setAdd(true);
          }}>
          <Image
            style={style.imgFooter}
            source={require('../assets/png/add.png')}
          />
          <ModalAdd
            visible={add}
            onCancel={() => {
              setAdd(false);
            }}
            onConfirm={() => {}}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  header: {
    height: window.height * 0.1,
    width: window.width * 1,
    backgroundColor: 'aqua',
    justifyContent: 'center',
  },
  viewImg: {
    // borderWidth: 1,
    height: 38,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTxtInput: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '45%',
    width: '80%',
    flexDirection: 'row',
    borderRadius: 30,
    marginLeft: 10,
  },
  txtInput: {
    backgroundColor: 'white',
    color: 'black',
    height: 33,
    maxWidth: '75%',
    width: '90%',
    borderRadius: 30,
    paddingTop: 10,
  },
  imgSearch: {
    height: 30,
    width: 30,
  },
  footer: {
    position: 'relative',
    height: 70,
    bottom: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewFooter: {
    borderWidth: 1,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgFooter: {
    height: 40,
    width: 40,
  },
  viewClose: {
    position: 'absolute',
    right: 10,
  },
});
