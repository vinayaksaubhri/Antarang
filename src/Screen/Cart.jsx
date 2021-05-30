import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  BackHandler,
} from 'react-native';
import { Global_container } from '../../style/global';
import RicePackets1 from '../../assets/Svg/RicePackets1';
import Plus_Button from '../../assets/Svg/Plus_Button';
import Minus_Button from '../../assets/Svg/Minus_Button';
import RicePackets2 from '../../assets/Svg/RicePackets2';
import Rice from '../../assets/Svg/Rice_large';
import Left_arrow from '../../assets/Svg/Left_arrow';
import Down_arrow from '../../assets/Svg/Down_arrow';
import { Radio } from 'native-base';
import {
  Upper_box,
  Lower_box,
  Header,
  Sub_header,
  Item_view,
  Rice_view,
  Item_box,
  Item_text,
  Lower_header,
  Cart_box,
  Bag,
  Bag_detail,
  Modal_view,
  Quantity_view,
  Pay_view,
  Pay_inner,
} from '../../style/cart';
import Search from '../Components/Search';

const Cart = () => {
  const [modal, setmodal] = useState(false);
  const [Inner_modal, setInner_modal] = useState(false);
  BackHandler.addEventListener('hardwareBackPress', function () {
    return true;
  });
  return (
    <Global_container>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <Upper_box>
            <Search />
            <View>
              <Rice_view style={{ marginLeft: '5%' }}>
                <Rice />
                <View style={{ margin: '2%' }}>
                  <Header>Rice</Header>
                  <Sub_header>50 Items</Sub_header>
                </View>
              </Rice_view>
              <Item_view>
                <Item_box>
                  <Item_text>Ration Items</Item_text>
                </Item_box>
                <Item_box>
                  <Item_text>Non Ration Items</Item_text>
                </Item_box>
              </Item_view>
            </View>
          </Upper_box>
          <Lower_box>
            <Lower_header>Rice</Lower_header>
            <Cart_box>
              <Bag>
                <RicePackets1 />
                <Quantity_view>
                  <Plus_Button />
                  <Text> 2kg </Text>
                  <Minus_Button />
                </Quantity_view>
              </Bag>
              <Bag_detail>
                <View>
                  <Sub_header>Item</Sub_header>
                  <Text>Raw Rice</Text>
                </View>
                <View>
                  <Sub_header>Item Cost</Sub_header>
                  <Text>Free</Text>
                </View>
                <View>
                  <Sub_header>Purchase Cost</Sub_header>
                  <Text>Free</Text>
                </View>
              </Bag_detail>
            </Cart_box>
            <Cart_box>
              <Bag>
                <RicePackets2 />
                <Quantity_view>
                  <Plus_Button />
                  <Text> 2kg </Text>
                  <Minus_Button />
                </Quantity_view>
              </Bag>
              <Bag_detail>
                <View>
                  <Sub_header>Item</Sub_header>
                  <Text>Tukada Rice</Text>
                </View>
                <View>
                  <Sub_header>Item Cost</Sub_header>
                  <Text>38.00/kg</Text>
                </View>
                <View>
                  <Sub_header>Purchase Cost</Sub_header>
                  <Text>0.00</Text>
                </View>
              </Bag_detail>
            </Cart_box>
          </Lower_box>

          <TouchableOpacity onPress={() => setmodal(true)}>
            <Button title="Button" onPress={() => setmodal(true)} />
          </TouchableOpacity>
          <Modal visible={modal} transparent={true} animationType="slide">
            <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
              <Modal_view>
                <TouchableOpacity onPress={() => setmodal(false)}>
                  <Lower_header>View Cart</Lower_header>
                </TouchableOpacity>
                <Cart_box>
                  <Bag>
                    <RicePackets1 />
                    <Quantity_view>
                      <Plus_Button />
                      <Text> 2kg </Text>
                      <Minus_Button />
                    </Quantity_view>
                  </Bag>
                  <Bag_detail>
                    <View>
                      <Sub_header>Item</Sub_header>
                      <Text>Raw Rice</Text>
                    </View>
                    <View>
                      <Sub_header>Item Cost</Sub_header>
                      <Text>Free</Text>
                    </View>
                    <View>
                      <Sub_header>Purchase Cost</Sub_header>
                      <Text>Free</Text>
                    </View>
                  </Bag_detail>
                </Cart_box>
                <Cart_box>
                  <Bag>
                    <RicePackets2 />
                    <Quantity_view>
                      <Plus_Button />
                      <Text> 2kg </Text>
                      <Minus_Button />
                    </Quantity_view>
                  </Bag>
                  <Bag_detail>
                    <View>
                      <Sub_header>Item</Sub_header>
                      <Text>Tukada Rice</Text>
                    </View>
                    <View>
                      <Sub_header>Item Cost</Sub_header>
                      <Text>38.00/kg</Text>
                    </View>
                    <View>
                      <Sub_header>Purchase Cost</Sub_header>
                      <Text>0.00</Text>
                    </View>
                  </Bag_detail>
                </Cart_box>
                <Button title="Button" onPress={() => setInner_modal(true)} />
              </Modal_view>
            </View>
            <Modal visible={Inner_modal} transparent={true} animationType="slide">
              <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
                <Modal_view>
                  <TouchableOpacity onPress={() => setInner_modal(false)}>
                    <Lower_header>Select Payment Option</Lower_header>
                  </TouchableOpacity>
                  <View>
                    <View>
                      <Pay_view>
                        <Pay_inner>
                          <Left_arrow />
                          <Text style={{ marginLeft: '15%' }}>Pay Now</Text>
                        </Pay_inner>
                        <Radio selected={true} />
                      </Pay_view>
                      <Sub_header>You will enter payment details on the next page</Sub_header>
                    </View>
                    <View style={{ marginTop: '8%' }}>
                      <Pay_view>
                        <Pay_inner>
                          <Down_arrow />
                          <Text style={{ marginLeft: '15%' }}>Pay Later</Text>
                        </Pay_inner>
                        <Radio selected={false} />
                      </Pay_view>
                      <Sub_header>
                        Amount will be added to your borrowed amount.You do not need to pay anything now.
                      </Sub_header>
                    </View>
                  </View>
                  <Button title="Button" />
                </Modal_view>
              </View>
            </Modal>
          </Modal>
        </ScrollView>
      </KeyboardAvoidingView>
    </Global_container>
  );
};

export default Cart;
