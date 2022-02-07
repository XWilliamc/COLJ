import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Nosotros</FooterLinkTitle>
            <FooterLink to='/sign-up'></FooterLink>
            <FooterLink to='/'></FooterLink>
            <FooterLink to='/'>Productos</FooterLink>
            <FooterLink to='/'></FooterLink>
            <FooterLink to='/'>Términos de servicio</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contáctenos</FooterLinkTitle>
            <FooterLink to='/'>Contacto</FooterLink>
            <FooterLink to='/'>Ayuda</FooterLink>
            <FooterLink to='/'></FooterLink>
            <FooterLink to='/'></FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/'>Canal oficial</FooterLink>
            <FooterLink to='/'>Novedades</FooterLink>
            <FooterLink to='/'></FooterLink>
            <FooterLink to='/'></FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Redes</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'></FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            COLJ
          </SocialLogo>
          <WebsiteRights>COLJ © 2022</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={'//'}
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
