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

export function SeusMix() {
  return (
    <Container>
      <StatusYou>
        <StatusText>Seus mixes mais ouvidos</StatusText>
        <VisibleInfo>VER TUDO</VisibleInfo>
      </StatusYou>
      <ContainerAux>
        <Album>
          <DivCapa>
            <ImageCapa1 />
            <DivAux>
              <TitleStatus>Skank</TitleStatus>
              <StatusInfo>
                <StatusSpan>Estandarte 2008</StatusSpan>
              </StatusInfo>
            </DivAux>
          </DivCapa>
        </Album>

        <Album>
          <DivCapa>
            <ImageCapa2 />
            <DivAux>
              <TitleStatus>Daily Mix 1</TitleStatus>
              <StatusInfo>
                <StatusSpan>Alesso, Margin Garix, Afrojo e mais...</StatusSpan>
              </StatusInfo>
            </DivAux>
          </DivCapa>
        </Album>

        <Album>
          <DivCapa>
            <ImageCapa3 />
            <DivAux>
              <TitleStatus>Daily Mix 1</TitleStatus>
              <StatusInfo>
                <StatusSpan>K-pop...</StatusSpan>
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
                <StatusSpan>Tudo com XX e mais...</StatusSpan>
              </StatusInfo>
            </DivAux>
          </DivCapa>
        </Album>

        <Album>
          <DivCapa>
            <ImageCapa5 />
            <DivAux>
              <TitleStatus>Foo Fighters</TitleStatus>
              <StatusInfo>
                <StatusSpan>Greatest Hits 2009 </StatusSpan>
              </StatusInfo>
            </DivAux>
          </DivCapa>
        </Album>

        <Album>
          <DivCapa>
            <ImageCapa6 />
            <DivAux>
              <TitleStatus>Queen</TitleStatus>
              <StatusInfo>
                <StatusSpan>Hot Space 1982</StatusSpan>
              </StatusInfo>
            </DivAux>
          </DivCapa>
        </Album>

        <Album>
          <DivCapa>
            <ImageCapa7 />
            <DivAux>
              <TitleStatus>Engenheiros do Hawai</TitleStatus>
              <StatusInfo>
                <StatusSpan>A revolta dos Dândis</StatusSpan>
              </StatusInfo>
            </DivAux>
          </DivCapa>
        </Album>
      </ContainerAux>
    </Container>
  )
}

export default SeusMix
