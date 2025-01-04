# **Heaven Yard**

**Heaven Yard** is an innovative, full-stack property portal designed to streamline the property management and discovery process for seekers and administrators. Leveraging modern technologies like **React.js**, **Tailwind CSS**, **Supabase**, and **Clerk Authentication**, this platform ensures a seamless, responsive, and efficient user experience for all stakeholders.

This project integrates real-world functionalities while adhering to industry standards, providing a reliable and scalable solution for property management.

---

## 🌟 **Key Features**

### **For Property Seekers**
- **Property Discovery**: Browse an extensive catalog of properties with advanced search and filtering options.
- **Submit Inquiries**: Easily contact property administrators through the portal for queries or applications.

### **For Property Administrators**
- **Efficient Management**: Create, update, and delete property listings with ease.
- **Data Insights**: Access comprehensive analytics on inquiries, trends, and property status.

### **General Features**
- **Secure Authentication**: User authentication powered by **Clerk** ensures data security.
- **Realtime Updates**: Integrated with **Supabase** for efficient backend operations and real-time synchronization.
- **Modern UI/UX**: Designed with **Tailwind CSS** and **Shadcn UI** for a clean, professional, and intuitive interface.
- **Scalable Infrastructure**: Built to accommodate both small-scale and large-scale operations.

---

## 🛠️ **Technology Stack**

| **Frontend**         | React.js, Tailwind CSS, Shadcn UI |
|-----------------------|-----------------------------------|
| **Backend**          | Supabase                         |
| **Authentication**   | Clerk                            |
| **Version Control**  | Git, GitHub                      |
| **Deployment**       | Vercel                           |

---

## 🌟 **Installation and Setup**

Follow these steps to set up the project locally:

```bash
# 1. Clone the repository and navigate to the project folder
git clone https://github.com/adnan-2313/mutualyst.git
cd mutualyst

# 2. Install dependencies
npm install

# 3. Set up environment variables
echo "VITE_APP_SUPABASE_URL=<your_supabase_url>" >> .env
echo "VITE_APP_SUPABASE_KEY=<your_supabase_key>" >> .env
echo "VITE_APP_CLERK_API_KEY=<your_clerk_api_key>" >> .env

# 4. Start the development server
npm start
