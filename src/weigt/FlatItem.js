import React, { PureComponent } from 'react'
import {
    View,
    Text, StyleSheet,
    TouchableOpacity, Image, PixelRatio
} from 'react-native'

const color = {
    theme: 'red',
    border: '#e0e0e0',
    background: '#f3f3f3'
}

class FletItem extends PureComponent {

    constructor(props){
        super(props)
        this.itemOnpress = this.props.onPress;
        this.info = this.props.info;
        this.index = this.props.index;
        this._onPressed = this._onPressed.bind(this);
    }

    render() {
       let info = this.info;
       let index = this.index;
        console.log('render cell',this.props);
        return (
            <TouchableOpacity style={styles.container} onPress={this._onPressed}>
                <Image source={{uri: info.uri}} style={styles.icon} />
                <View style={styles.rightContainer}>
                    <Text style={styles.h1} numberOfLines={1}>{info.title}-{index}</Text>
                    <Text style={styles.p} numberOfLines={3} >{info.des}</Text>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Text style={[styles.h1, styles.price]}>{info.price}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
    _onPressed(){
        let parm = this.info.title + '-' + this.index;
        this.itemOnpress(parm);
    }
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: color.border,
        backgroundColor: 'white',
        height:120,
    },
    icon: {
        width: 160,
        borderRadius: 2,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: color.theme
    },
    h1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222222',
    },
    p: {
        fontSize: 12,
        color: '#777777',
        marginVertical :8,
    },
})

export default FletItem