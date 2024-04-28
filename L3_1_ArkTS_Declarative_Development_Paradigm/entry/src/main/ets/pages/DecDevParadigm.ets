@Entry
@Component
struct DecDevParadigm {
  @State message: string = 'Hello World'

  build() {
    Column() {
      Text('Hi')
        .fontSize(30)
      Text(this.message)
        .fontSize(30)
      Divider()
      Button() {
        Text('Press Here')
          .fontSize(15)
      }
      .onClick(() => {
        this.message = "ArkUI Example"
      })
      .width(200)
      .height(50)
    }
  }
}
