import React from 'react'
import {
  Container,
  StatusYou,
  StatusText,
  VisibleInfo,
  Album,
  DivCapa,
  ImageCapa1,
  ImageCapa2,
  ImageCapa3,
  ImageCapa4,
  ImageCapa5,
  ImageCapa6,
  ImageCapa7,
  TitleStatus,
  StatusSpan,
  StatusInfo,
  ContainerAux,
  DivAux
} from './styles.ts'

export function OuvidasRecentes() {
  return (
    <Container>
      <StatusYou>
        <StatusText>Feito para você</StatusText>
        <VisibleInfo>VER TUDO</VisibleInfo>
      </StatusYou>
      <ContainerAux>
        <Album>
          <DivCapa>
            <ImageCapa1 />
            <DivAux>
              <TitleStatus>No Repeat</TitleStatus>
              <StatusInfo>
                <StatusSpan>
                  Dua Lipa, Skank, Pink Floyd, Queen e mais...
                </StatusSpan>
              </StatusInfo>
            </DivAux>
          </DivCapa>
        </Album>

        <Album>
          <DivCapa>
            <ImageCapa2 />
            <DivAux>
              <TitleStatus>Daily Mix 4</TitleStatus>
              <StatusInfo>
                <StatusSpan>
                  Rihanna, Beyoncé, Katy Perry, Taylor Swift e mais...
                </StatusSpan>
              </StatusInfo>
            </DivAux>
          </DivCapa>
        </Album>

        <Album>
          <DivCapa>
            <ImageCapa3 />
            <DivAux>
              <TitleStatus>Daily Mix 2</TitleStatus>
              <StatusInfo>
                <StatusSpan>
                  Racionais Mcs, Emicida, Tribo da Periferia e mais...
                </StatusSpan>
              </StatusInfo>
            </DivAux>
          </DivCapa>
        </Album>

        <Album>
          <DivCapa>
            <ImageCapa4 />
            <DivAux>
              <TitleStatus>Daily Mix 1</TitleStatus>
              <StatusInfo>
                <StatusSpan>
                  Lulu Santos, Engenhiros do Havai, Roupa nova e mais...
                </StatusSpan>
              </StatusInfo>
            </DivAux>
          </DivCapa>
        </Album>

        <Album>
          <DivCapa>
            <ImageCapa5 />
            <DivAux>
              <TitleStatus>Daily Mix 6</TitleStatus>
              <StatusInfo>
                <StatusSpan>
                  Bob Marley, John Holt, Peter Tosh, Bunny e mais...
                </StatusSpan>
              </StatusInfo>
            </DivAux>
          </DivCapa>
        </Album>

        <Album>
          <DivCapa>
            <ImageCapa6 />
            <DivAux>
              <TitleStatus>Daily Mix 5</TitleStatus>
              <StatusInfo>
                <StatusSpan>
                  Bruno Mars, Ed Sheeran, Justin Timberlake e mais...
                </StatusSpan>
              </StatusInfo>
            </DivAux>
          </DivCapa>
        </Album>

        <Album>
          <DivCapa>
            <ImageCapa7 />
            <DivAux>
              <TitleStatus>Daily Mix 3</TitleStatus>
              <StatusInfo>
                <StatusSpan>
                  Eminem, Jasse Jay, Jay-z, 50 Cent, Snoop Dogg e mais...
                </StatusSpan>
              </StatusInfo>
            </DivAux>
          </DivCapa>
        </Album>
      </ContainerAux>
    </Container>
  )
}

export default OuvidasRecentes
