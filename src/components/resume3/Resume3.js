import React from 'react'
import './App.css'
import picture from './pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Rsume3 = () => {
  return (
  
    <div className='wrapper'>
      <div className='resume'>
        <div className='left'>
          <div className='img_holder'>
            <img src={picture} alt='picture' />
          </div>
          <div className='contact_wrap pb'>
            <div className='title'>Contact</div>
            <div className='contact'>
              <ul>
                <li>
                  <div className='li_wrap'>
                    <div className='icon'>
             
               
                      <FontAwesomeIcon icon="mobile" />
                      
                    </div>
                    <div className='text'>972 9838485</div>
                  </div>
                </li>
                <li>
                  <div className='li_wrap'>
                    <div className='icon'>
                    <FontAwesomeIcon icon="envelope" />
                   
                    </div>
                    <div className='text'>aniabukstein@gmail.com</div>
                  </div>
                </li>
                <li>
                  <div className='li_wrap'>
                    <div className='icon'>
                    <FontAwesomeIcon icon="browser" />
                      <i className='fab fa-weebly' aria-hidden='true' />
                    </div>
                    <div className='text'>www.aniabukstein.com</div>
                  </div>
                </li>
                <li>
                  <div className='li_wrap'>
                    <div className='icon'>
                    <FontAwesomeIcon icon="map" />
                      <i className='fas fa-map-signs' aria-hidden='true' />
                    </div>
                    <div className='text'>17 street, jerusalem, Israel</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='skills_wrap pb'>
            <div className='title'>Skills</div>
            <div className='skills'>
              <ul>
                <li>
                  <div className='li_wrap'>
                    <div className='icon'>
                      <i className='fab fa-html5' />
                      <FontAwesomeIcon icon="html" />
                    </div>
                    <div className='text'>HTML</div>
                  </div>
                </li>
                <li>
                  <div className='li_wrap'>
                    <div className='icon'>
                      <i className='fab fa-css3-alt' />
                    </div>
                    <div className='text'>CSS</div>
                  </div>
                </li>
                <li>
                  <div className='li_wrap'>
                    <div className='icon'>
                      <i className='fab fa-js' />
                    </div>
                    <div className='text'>Javascript</div>
                  </div>
                </li>
                <li>
                  <div className='li_wrap'>
                    <div className='icon'>
                      <i className='fab fa-react' />
                    </div>
                    <div className='text'>React.JS</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='hobbies_wrap pb'>
            <div className='title'>hobbies</div>
            <div className='hobbies'>
              <ul>
                <li>
                  <div className='li_wrap'>
                    <div className='icon'>
                      <i className='fas fa-book' />
                    </div>
                    <div className='text'>Reading</div>
                  </div>
                </li>
                <li>
                  <div className='li_wrap'>
                    <div className='icon'>
                      <i className='fas fa-music' />
                    </div>
                    <div className='text'>Music</div>
                  </div>
                </li>
                <li>
                  <div className='li_wrap'>
                    <div className='icon'>
                      <i className='fas fa-gamepad' />
                    </div>
                    <div className='text'>Gaming</div>
                  </div>
                </li>
                <li>
                  <div className='li_wrap'>
                    <div className='icon'>
                      <i className='fas fa-tree' />
                    </div>
                    <div className='text'>Gardening</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='header'>
            <div className='name_role'>
              <div className='name'>Ania Bukstein</div>
              <div className='role'>UI UX Developer</div>
            </div>
            <div className='about'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              dicta beatae optio, corporis fugit accusantium debitis laborum
              tenetur, quisquam distinctio nihil quam eum. Laudantium saepe,
              sunt, esse laboriosam dolores distinctio?
            </div>
          </div>
          <div className='right_inner'>
            <div className='exp'>
              <div className='title'>experience</div>
              <div className='exp_wrap'>
                <ul>
                  <li>
                    <div className='li_wrap'>
                      <div className='date'>2018 - Present</div>
                      <div className='info'>
                        <p className='info_title'>UI Team Lead</p>
                        <p className='info_com'>Facebook</p>
                        <p className='info_cont'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Fuga voluptatibus consequatur rem nostrum omnis!
                          Architecto.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='li_wrap'>
                      <div className='date'>2015 - 2018</div>
                      <div className='info'>
                        <p className='info_title'>UI Developer</p>
                        <p className='info_com'>Amazon</p>
                        <p className='info_cont'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Fuga voluptatibus consequatur rem nostrum omnis!
                          Architecto.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='li_wrap'>
                      <div className='date'>2014 - 2015</div>
                      <div className='info'>
                        <p className='info_title'>Junior UI Developer</p>
                        <p className='info_com'>Coding Power</p>
                        <p className='info_cont'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Fuga voluptatibus consequatur rem nostrum omnis!
                          Architecto.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='education'>
              <div className='title'>Education</div>
              <div className='education_wrap'>
                <ul>
                  <li>
                    <div className='li_wrap'>
                      <div className='date'>2010 - 2014</div>
                      <div className='info'>
                        <p className='info_title'>Computer Science</p>
                        <p className='info_com'>Israel University</p>
                        <p className='info_cont'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Fuga voluptatibus consequatur rem nostrum omnis!
                          Architecto.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='li_wrap'>
                      <div className='date'>2008 - 2010</div>
                      <div className='info'>
                        <p className='info_title'>Computer Science</p>
                        <p className='info_com'>Israel Junior College</p>
                        <p className='info_cont'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Fuga voluptatibus consequatur rem nostrum omnis!
                          Architecto.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='li_wrap'>
                      <div className='date'>1998 - 2008</div>
                      <div className='info'>
                        <p className='info_title'>Schooling</p>
                        <p className='info_com'>Israel School</p>
                        <p className='info_cont'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Fuga voluptatibus consequatur rem nostrum omnis!
                          Architecto.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rsume3
