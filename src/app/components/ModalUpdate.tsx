import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
const data = [
  {
    id: 1,
    name: 'No Container',
    placeholder: 'input no',
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
    placeholder: 'choose size',
  },
  {
    id: 4,
    name: 'Slot',
    placeholder: 'input text',
  },
  {
    id: 5,
    name: 'Tier',
    placeholder: 'input text',
  },
];

const window = Dimensions.get('window');

const ModalUpdate = ({
  visible,
  onConfirm,
  onCancel,
}: {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  return (
    <View>
      <Modal animationType="slide" visible={visible} transparent={true}>
        <View style={style.container}>
          <View
            style={{
              height: window.height * 1,
              width: window.width * 1,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: '60%',
                width: '87%',
                backgroundColor: 'white',
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
                UPDATE DATA
              </Text>

              <FlatList
                data={data}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: 300,
                        marginTop: 10,
                      }}>
                      <View style={style.txt}>
                        <Text
                          style={{
                            color: 'black',
                            textAlign: 'center',
                            fontSize: 17,
                          }}>
                          {item.name}
                        </Text>
                      </View>

                      <View style={{justifyContent: 'flex-end'}}>
                        <TextInput
                          style={style.txtInput}
                          placeholder={item.placeholder}
                          placeholderTextColor={'gray'}
                        />
                      </View>
                    </View>
                  );
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  bottom: 0,
                  marginBottom: 30,
                }}>
                <TouchableOpacity style={style.btnDel} onPress={onCancel}>
                  <Image
                    source={require('../assets/png/close.png')}
                    style={{height: 50, width: 50}}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={style.btnDel} onPress={onConfirm}>
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

export default ModalUpdate;
const style = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
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
  txtInput: {
    height: 36,
    width: 180,
    maxWidth: 190,
    fontSize: 17,
    textAlign: 'left',
    color: 'black',
    borderWidth: 1,
  },
});
