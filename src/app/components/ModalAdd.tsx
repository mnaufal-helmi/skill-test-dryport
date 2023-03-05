import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import Axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown';

const label = [
  {
    id: 1,
    name: 'No Container',
    placeholder: 'input no container',
  },
  {
    id: 2,
    name: 'Size',
    option: 0,
    placeholder: 'choose size',
  },
  {
    id: 3,
    name: 'Type',
    option: 0,
    placeholder: 'choose type',
  },
  {
    id: 4,
    name: 'Slot',
    placeholder: 'input slot',
  },
  {
    id: 5,
    name: 'Tier',
    placeholder: 'input raw',
  },
];

const dataSize = [10, 20, 30, 40];
const dataType = ['A', 'B', 'C', 'D'];

const window = Dimensions.get('window');

const ModalAdd = ({
  visible,
  onConfirm,
  onCancel,
}: {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await Axios.post('http://192.168.1.16:3004/users');
    setData(response.data);
  };
  // console.log(data, '<<<');
  useEffect(() => {
    fetchData();
  }, []);

  const addData = async (newData: any) => {
    const response = await Axios.post(
      'http://192.168.1.16:3004/users',
      newData,
    );
    setData([...data, response.data]);
  };

  const handleAddData = newData => {
    addData(newData);
  };

  return (
    <View>
      <Modal animationType="slide" visible={visible} transparent={true}>
        <View style={style.container}>
          <View style={style.wrapper}>
            <View style={style.viewTable}>
              <View style={{flexDirection: 'row'}}>
                <FlatList
                  data={label}
                  style={style.flatList}
                  renderItem={({item}) => {
                    return (
                      <View style={style.cellTable}>
                        <View style={style.txt}>
                          <Text style={style.txtItemName}>{item.name}</Text>
                        </View>

                        {/* <TextInput
                        style={style.txtInput}
                        placeholder={item.placeholder}
                        placeholderTextColor={'gray'}
                        value={data}
                        onChangeText={() => {
                          value => setData(value);
                        }}
                      /> */}
                      </View>
                    );
                  }}
                />
                <View style={style.viewTxtInput}>
                  <TextInput
                    style={style.txtInput}
                    placeholder={'cek'}
                    placeholderTextColor={'gray'}
                    value={data}
                    onChangeText={() => {
                      value => setData(value);
                    }}
                  />
                  <SelectDropdown
                    data={dataSize}
                    searchPlaceHolder={'choose size'}
                    onSelect={selectedItem => {
                      selectedItem;
                    }}
                    buttonStyle={style.sizeDropDown}
                  />
                  <SelectDropdown
                    data={dataType}
                    searchPlaceHolder={'choose size'}
                    onSelect={selectedItem => {
                      selectedItem;
                    }}
                    buttonStyle={style.sizeDropDown}
                  />

                  <View style={style.label}>
                    <TextInput
                      style={style.txtInput}
                      placeholder={'cek'}
                      placeholderTextColor={'gray'}
                    />
                  </View>
                  <View style={style.label}>
                    <TextInput
                      style={style.txtInput}
                      placeholder={'cek'}
                      placeholderTextColor={'gray'}
                    />
                  </View>
                </View>
              </View>
              <View style={style.viewBtn}>
                <TouchableOpacity style={style.btnDel} onPress={onCancel}>
                  <Image
                    source={require('../assets/png/close.png')}
                    style={style.imgClose}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={style.btnDel}
                  onPress={() => handleAddData(newData)}>
                  <Image source={require('../assets/png/verifed.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalAdd;
const style = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  wrapper: {
    height: window.height * 1,
    width: window.width * 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnDel: {
    backgroundColor: 'white',
    height: window.height * 0.05,
    width: window.width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  txt: {
    color: 'black',
    height: 36,
    width: '30%',
    borderWidth: 1,
    marginRight: 20,
    justifyContent: 'center',
  },
  txtItemName: {
    color: 'black',
    textAlign: 'center',
    fontSize: 17,
  },
  viewTxtInput: {
    marginTop: 30,
    marginRight: 10,
  },
  label: {
    marginTop: 12,
  },
  txtInput: {
    height: 36,
    width: 180,
    maxWidth: 190,
    fontSize: 17,
    textAlign: 'left',
    color: 'black',
    borderWidth: 1,
  },
  flatList: {
    marginTop: 20,
  },
  imgClose: {
    height: 50,
    width: 50,
  },
  viewBtn: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    marginBottom: 30,
  },
  viewTable: {
    height: '60%',
    width: '87%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderWidth: 1,
  },
  cellTable: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    marginTop: 10,
  },
  sizeDropDown: {
    height: 35,
    marginTop: 10,
  },
});
