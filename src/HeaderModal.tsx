import React, { ReactNode } from 'react'
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native'
import CloseButton from './CloseButton'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
  },
})

export interface CloseButtonProps {
  onClose(): void
}

interface HeaderModalProps {
  withFilter?: boolean
  withCloseButton?: boolean
  closeButtonImage?: ImageSourcePropType
  closeButtonStyle?: StyleProp<ViewStyle>
  closeButtonImageStyle?: StyleProp<ImageStyle>
  renderFilter(props: HeaderModalProps): ReactNode
  renderCloseButton?(props: CloseButtonProps): ReactNode
}
export const HeaderModal = (props: HeaderModalProps & CloseButtonProps) => {
  const {
    withFilter,
    withCloseButton,
    closeButtonImage,
    closeButtonStyle,
    closeButtonImageStyle,
    renderCloseButton,
    onClose,
    renderFilter,
  } = props
  return (
    <View style={styles.container}>
      {withFilter && renderFilter(props)}
      {withCloseButton &&
        (renderCloseButton ? (
          renderCloseButton(props)
        ) : (
          <CloseButton
            image={closeButtonImage}
            style={closeButtonStyle}
            imageStyle={closeButtonImageStyle}
            onPress={onClose}
          />
        ))}
    </View>
  )
}

HeaderModal.defaultProps = {
  withCloseButton: true,
}
