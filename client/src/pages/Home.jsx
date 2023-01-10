import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// mui 
import Button from '@mui/material/Button';

function Home() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate('/main/moviesnav/movies')
    };
  }, [user, navigate]);

  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url("https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/2fe6e3c0-5613-4625-a0c1-3d605effd10b/IN-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg")' }}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <div className='d-flex flex-column align-items-center col-10 col-md-6 space-y-5 h-50'>
            <h1 className='display-1 fw-fbold text-white text-center'>Unlimited movies, TV shows, and more.</h1>
            <h3 className='display-6 fw-normal text-white text-center'>Watch anywhere. Cancel anytime.</h3>
            <h6 className='display-6 fs-4 fw-normal text-white text-center'>Ready to watch? Enter your email to create or restart your membership.</h6>
            <div className='d-flex flex-column align-items-center col-6'>
              <Link to={'/login'} className='text-decoration-none'><Button variant="contained" color='error'>Get Started</Button></Link>
            </div>
          </div>
        </div>
      </div>
      <hr className='m-0' />
      <div className="h-screen flex items-center justify-center bg-black p-5">
        <div className="space-y-5 p-5">
          <p className="text-white font-bold text-4xl">Enjoy on your TV.</p>
          <p className="text-white font-semiboldbold text-xl">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div>
          <img alt="TV" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
        </div>
      </div>
      <hr className='m-0' />
      <div className="h-screen flex items-center justify-center bg-black p-5">
        <div>
          <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img" />
        </div>
        <div className="space-y-5">
          <p className="text-white font-bold text-4xl">Download your shows to watch offline.</p>
          <p className="text-white font-semiboldbold text-xl">Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
      <hr className='m-0' />
      <div className="h-screen flex items-center justify-center bg-black p-5">
        <div className="space-y-5 p-5">
          <p className="text-white font-bold text-4xl">Watch everywhere.</p>
          <p className="text-white font-semiboldbold text-xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div>
          <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" data-uia="our-story-card-img" />
        </div>
      </div>
      <hr className='m-0' />
      <div className="h-screen flex items-center justify-center bg-black p-5">
        <div className="p-5">
          <img alt="" className="our-story-card-img" src="https://occ-0-5556-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" data-uia="our-story-card-img" />
        </div>
        <div className="space-y-5">
          <p className="text-white font-bold text-4xl">Create profiles for children.</p>
          <p className="text-white font-semiboldbold text-xl">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
      </div>
      <hr className='m-0' />
      <div className="min-h-screen bg-black space-y-10 pb-5">
        <p className="p-5 text-white font-bold text-5xl flex justify-center">Frequently Asked Questions</p>
        <div className="space-y-5 flex flex-col justify-center items-center">
          <div className="p-5 bg-[#303030] w-3/4">
            <p className="text-3xl text-white">What is Netflix ?</p>
          </div>
          <div className="p-5 bg-[#303030] w-3/4">
            <p className="text-3xl text-white">How much does Netflix cost ?</p>
          </div>
          <div className="p-5 bg-[#303030] w-3/4">
            <p className="text-3xl text-white">Where can I watch ?</p>
          </div>
          <div className="p-5 bg-[#303030] w-3/4">
            <p className="text-3xl text-white">Is Netflix good for kids ?</p>
          </div>
        </div>
      </div>
      <hr className='m-0' />
      {/* Footer */}
      <footer className=" bg-gray-900">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3"> Download our Next app </h3>
            <p> Stay fit. All day, every day. </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0"> © Aviel Sheto, 2022. </p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home