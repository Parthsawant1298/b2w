'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Camera, User, Mail, Calendar, ArrowLeft, LogOut, Upload, X, Check } from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/user', {
        credentials: 'include'
      });
      
      if (!response.ok) {
        router.push('/login');
        return;
      }

      const data = await response.json();
      setUser(data.user);
      if (data.user.profilePicture) {
        setImagePreview(data.user.profilePicture);
      }
    } catch (error) {
      console.error('Auth error:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should not exceed 5MB');
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        setError('Only image files are allowed');
        return;
      }
      
      setError('');
      setSuccess('');
      setProfileImage(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!profileImage) {
      setError('Please select an image first');
      return;
    }
    
    setUploading(true);
    setError('');
    setSuccess('');
    
    try {
      const formData = new FormData();
      formData.append('profileImage', profileImage);
      
      const response = await fetch('/api/user/update-profile-picture', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload image');
      }
      
      const data = await response.json();
      
      setUser(prev => ({
        ...prev,
        profilePicture: data.profilePicture
      }));
      
      setImagePreview(data.profilePicture);
      setProfileImage(null);
      setSuccess('Profile picture updated successfully!');
      
      setTimeout(() => setSuccess(''), 3000);
      
      const fileInput = document.getElementById('profile-upload');
      if (fileInput) {
        fileInput.value = '';
      }
      
    } catch (error) {
      console.error('Upload error:', error);
      setError(error.message || 'Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleCancelUpload = () => {
    setProfileImage(null);
    setError('');
    setSuccess('');
    setImagePreview(user?.profilePicture || null);
    
    const fileInput = document.getElementById('profile-upload');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 relative z-10"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="text-center relative z-10">
          <h1 className="text-2xl font-semibold text-white mb-4">Not authenticated</h1>
          <button 
            onClick={() => router.push('/login')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-purple-500/25 border border-purple-400/30"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-xl border-b border-purple-500/30 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <img 
                  src="/images/logo.png" 
                  alt="B2W Infotech Logo" 
                  className="h-8 w-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hidden">
                  <span className="text-white font-bold text-sm">B2W</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">B2W Infotech</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">Welcome, {user.name?.split(' ')[0]}</span>
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Navigation */}
        <div className="mb-8">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-black/20 backdrop-blur-xl rounded-xl shadow-xl border border-purple-500/30 overflow-hidden shadow-lg shadow-purple-500/10">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-12">
            <div className="flex flex-col items-center">
              {/* Profile Picture */}
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-white p-1 shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    {imagePreview ? (
                      <img 
                        src={imagePreview}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-16 h-16 text-gray-400" />
                    )}
                  </div>
                  {profileImage && (
                    <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                      New
                    </div>
                  )}
                </div>
                
                {/* Camera Button */}
                <label
                  htmlFor="profile-upload"
                  className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <Camera className="w-5 h-5 text-gray-600" />
                </label>
                <input
                  type="file"
                  id="profile-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              <h1 className="text-2xl font-bold text-white mb-2">{user.name}</h1>
              <p className="text-purple-100">{user.email}</p>
            </div>
          </div>

          {/* Upload Controls */}
          {profileImage && (
            <div className="px-8 py-4 bg-purple-500/10 border-b border-purple-500/30">
              <div className="flex items-center justify-between">
                <p className="text-sm text-purple-200">Ready to update your profile picture?</p>
                <div className="flex space-x-3">
                  <button
                    onClick={handleCancelUpload}
                    disabled={uploading}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-300 bg-black/20 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors backdrop-blur-xl"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                  <button
                    onClick={handleUpload}
                    disabled={uploading}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 border border-transparent rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-purple-500/25"
                  >
                    {uploading ? (
                      <>
                        <div className="w-4 h-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        <span>Uploading...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4" />
                        <span>Save Photo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Status Messages */}
          {error && (
            <div className="px-8 py-4 bg-red-500/10 border-b border-red-400/30">
              <div className="flex items-center space-x-2 text-red-400">
                <X className="w-5 h-5" />
                <span className="text-sm">{error}</span>
              </div>
            </div>
          )}

          {success && (
            <div className="px-8 py-4 bg-green-500/10 border-b border-green-400/30">
              <div className="flex items-center space-x-2 text-green-400">
                <Check className="w-5 h-5" />
                <span className="text-sm">{success}</span>
              </div>
            </div>
          )}

          {/* Profile Information */}
          <div className="px-8 py-8">
            <h2 className="text-lg font-semibold text-white mb-6">Profile Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                  <User className="w-4 h-4" />
                  <span>Full Name</span>
                </div>
                <p className="text-white font-medium">{user.name}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                  <Mail className="w-4 h-4" />
                  <span>Email Address</span>
                </div>
                <p className="text-white font-medium">{user.email}</p>
              </div>

              <div className="space-y-1 md:col-span-2">
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Member Since</span>
                </div>
                <p className="text-white font-medium">
                  {new Date(user.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Upload Guidelines */}
          <div className="px-8 py-4 bg-purple-500/5 border-t border-purple-500/20">
            <p className="text-xs text-gray-400">
              <strong className="text-purple-300">Photo Guidelines:</strong> Upload JPG, PNG, WebP, or GIF files up to 5MB. Square images work best for profile pictures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}