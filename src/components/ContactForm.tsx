"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(3, { message: "الاسم يجب أن يكون 3 أحرف على الأقل" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صحيح" }),
  phone: z.string().regex(/^01[0-2,5]\d{8}$/, { message: "رقم هاتف مصري غير صحيح" }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Submitted:", data);
    setIsSubmitting(false);
    setSuccessMessage("تم استلام رسالتك بنجاح. سنتواصل معك قريباً.");
    reset();
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <h3 className="text-3xl font-extrabold text-primary mb-8 text-center tracking-wide">احجز استشارتك الآن</h3>
      
      {successMessage ? (
        <div className="bg-primary/10 text-primary border border-primary/20 p-4 rounded-xl text-center font-bold mb-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {successMessage}
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="space-y-2">
          <label className="text-xs font-bold text-text-secondary uppercase tracking-widest block mr-1">الاسم الكامل</label>
          <input
            {...register("name")}
            type="text"
            placeholder="الاسم الثلاثي"
            className="w-full bg-surface border border-white/5 rounded-lg px-5 py-4 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
          />
          {errors.name && <span className="text-red-400 text-xs font-medium mt-1 inline-block">{errors.name.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-text-secondary uppercase tracking-widest block mr-1">البريد الإلكتروني</label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className="w-full bg-surface border border-white/5 rounded-lg px-5 py-4 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all shadow-inner text-right"
            dir="ltr"
          />
          {errors.email && <span className="text-red-400 text-xs font-medium mt-1 inline-block">{errors.email.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-text-secondary uppercase tracking-widest block mr-1">رقم الهاتف</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="01xxxxxxxxx"
            className="w-full bg-surface border border-white/5 rounded-lg px-5 py-4 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all shadow-inner text-right"
            dir="ltr"
          />
          {errors.phone && <span className="text-red-400 text-xs font-medium mt-1 inline-block">{errors.phone.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 bg-primary hover:bg-primary-dark text-bg-deep font-black text-sm uppercase tracking-widest rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-primary/10 active:scale-[0.98] mt-4"
        >
          {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب الآن"}
        </button>
      </form>
    </div>
  );
}
