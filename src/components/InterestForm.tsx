import React from 'react';
import { useForm } from 'react-hook-form';
import { Shield, Monitor, Book, User as UserIcon, Linkedin, Facebook, Coffee } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  costGuess: string;
  spidrPin: string;
}

const sidebarIcons = [
  { icon: <Coffee className="w-6 h-6" />, label: 'Product' },
  { icon: <Shield className="w-6 h-6" />, label: 'Security' },
  { icon: <Monitor className="w-6 h-6" />, label: 'Web' },
  { icon: <Book className="w-6 h-6" />, label: 'Docs' },
  { icon: <UserIcon className="w-6 h-6" />, label: 'Account' },
];

const InterestForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>();

  const spidrPin = watch('spidrPin');

  // Format PIN with dashes
  React.useEffect(() => {
    if (spidrPin) {
      const cleaned = spidrPin.replace(/\D/g, '');
      const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1-');
      if (formatted !== spidrPin) {
        setValue('spidrPin', formatted);
      }
    }
  }, [spidrPin, setValue]);

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    alert('Thank you for your interest! Check the console for form data.');
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar - Keeping your existing sidebar */}
      <aside className="relative flex flex-col items-center w-[60px] py-8 border-r border-gray-800"  style={{ backgroundColor:  'rgb(15, 15, 15)'  }}>
        <div className="mb-10">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="/spidr-logo.png" alt="Spidr Logo" className="w-10 h-10" />
          </div>
          <img src="/spidr-title.png" alt="Spidr" className="w-12 mt-2" />
        </div>
        
        {/* Icons - centered vertically */}
        <div className="flex-1 flex flex-col justify-center">
          <nav className="flex flex-col gap-8">
          {sidebarIcons.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {/* Icon */}
              <div className="text-gray-400 hover:text-blue-400 cursor-pointer flex flex-col items-center">
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </div>
              {/* Vertical line */}
              <div className="absolute right-0 h-12 w-[3px] bg-white/30 rounded-full" />
            </div>
          ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <a href="#" className="text-gray-500 hover:text-blue-400"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="text-gray-500 hover:text-blue-400"><Facebook className="w-5 h-5" /></a>
        </div>
      </aside>

      {/* Main Content - Updated to match the About us style */}
      <main className="flex-1 flex items-center justify-center p-8" style={{ backgroundColor:'rgba(0, 0, 0, 0.8)' }}>
        <div className="w-full max-w-2xl shadow-md p-8" style={{ backgroundColor: 'rgba(71, 157, 175, 0.9)' }}>
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">Interest Form</h1>
            <div className="h-1 w-16 bg-white mb-4"></div>
            <p className="text-white mb-6">Be the first to know about our new air fryer!</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white mb-1">
                  A. First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  {...register('firstName', { required: 'First name is required' })}
                  className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-white'} rounded-md focus:outline-none focus:ring-1 focus:ring-white bg-white/20 text-white placeholder-white/70`}
                  placeholder="Please give first name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-300">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white mb-1">
                  A. Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  {...register('lastName', { required: 'Last name is required' })}
                  className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-white'} rounded-md focus:outline-none focus:ring-1 focus:ring-white bg-white/20 text-white placeholder-white/70`}
                  placeholder="Please give last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-300">{errors.lastName.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                  B. Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[\+]?[1-9][\d]{0,15}$/,
                      message: 'Please enter a valid phone number'
                    }
                  })}
                  className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-white'} rounded-md focus:outline-none focus:ring-1 focus:ring-white bg-white/20 text-white placeholder-white/70`}
                  placeholder="Please give phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-300">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                  C. Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-white'} rounded-md focus:outline-none focus:ring-1 focus:ring-white bg-white/20 text-white placeholder-white/70`}
                  placeholder="Please give email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Cost Guess */}
            <div>
              <label htmlFor="costGuess" className="block text-sm font-medium text-white mb-1">
                4. Guess the Air Fryer's Cost
              </label>
              <input
                id="costGuess"
                type="number"
                min="0"
                step="0.01"
                {...register('costGuess', {
                  required: 'Cost guess is required',
                  min: {
                    value: 0,
                    message: 'Cost must be positive'
                  }
                })}
                className={`w-full px-4 py-2 border ${errors.costGuess ? 'border-red-500' : 'border-white'} rounded-md focus:outline-none focus:ring-1 focus:ring-white bg-white/20 text-white placeholder-white/70`}
                placeholder="1000"
              />
              {errors.costGuess && (
                <p className="mt-1 text-sm text-red-300">{errors.costGuess.message}</p>
              )}
            </div>

            {/* Spidr PIN */}
            <div>
              <label htmlFor="spidrPin" className="block text-sm font-medium text-white mb-1">
                O. Secret 16-digit Spidr PIN
              </label>
              <input
                id="spidrPin"
                type="text"
                maxLength={19}
                {...register('spidrPin', {
                  required: 'Spidr PIN is required',
                  pattern: {
                    value: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
                    message: 'Please enter a valid 16-digit PIN (####-####-####-####)'
                  }
                })}
                className={`w-full px-4 py-2 border ${errors.spidrPin ? 'border-red-500' : 'border-white'} rounded-md focus:outline-none focus:ring-1 focus:ring-white bg-white/20 text-white placeholder-white/70`}
                placeholder="Please share your name"
              />
              {errors.spidrPin && (
                <p className="mt-1 text-sm text-red-300">{errors.spidrPin.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 px-6 py-3 bg-white text-gray-800 font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            >
              Submit Interest Form
            </button>
          </form>

          {/* Footer */}
          <div className="mt-10 text-center text-sm text-white/80">
            Powered by Spiel Design
          </div>
        </div>
      </main>
    </div>
  );
};

export default InterestForm;