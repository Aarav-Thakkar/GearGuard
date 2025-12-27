import { useParams } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const params = useParams();
  const role = params.role || 'employee';

  const navItems = [
    'Maintenance', 'Equipment', 'Teams', 
    'Maintenance Calendar', 'Ticket Requests'
  ];

  const statusCards = [
    { title: 'Critical Equipment', value: '2', trend: '+1', color: '#ef4444' },
    { title: 'Technician Load', value: '87%', trend: '-2%', color: '#f59e0b' },
    { title: 'Open Requests', value: '14', trend: '+3', color: '#10b981' }
  ];

  const recentTickets = [
    { 
      id: '#MT-124', 
      subject: 'HVAC System Failure - Floor 3', 
      employee: 'John D. (Tech Lead)', 
      category: 'HVAC', 
      priority: 'High', 
      company: 'Acme Corp', 
      status: 'In Progress' 
    },
    { 
      id: '#MT-123', 
      subject: 'Elevator Door Malfunction', 
      employee: 'Sarah K. (Technician)', 
      category: 'Elevator', 
      priority: 'Medium', 
      company: 'TechNova Ltd', 
      status: 'Pending' 
    },
    { 
      id: '#MT-122', 
      subject: 'Lighting Issue - Conference Room', 
      employee: 'Mike R. (Electrician)', 
      category: 'Electrical', 
      priority: 'Low', 
      company: 'Acme Corp', 
      status: 'Resolved' 
    }
  ];

  return (
    <div className="dashboardContainer">
      <nav className="dashboardNav">
        {navItems.map((item, i) => (
          <a key={i} href={`/${item.toLowerCase().replace(' ', '-')}`} className="navLink">
            {item}
          </a>
        ))}
      </nav>

      {/* Header - unchanged */}
      <header className="dashboardHeader">
        <div>
          <h1 className="dashboardTitle">
            {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
          </h1>
          <p className="dashboardSubtitle">Overview and key metrics</p>
        </div>
      </header>

      <section className="statusSection">
        <div className="statusGrid">
          {statusCards.map((card, i) => (
            <div key={i} className="statusCard">
              <div className="statusHeader">
                <div className="statusIcon" style={{ backgroundColor: card.color + '20' }} />
                <span className="statusTrend" style={{ color: card.color }}>
                  {card.trend}
                </span>
              </div>
              <div className="statusValue">{card.value}</div>
              <div className="statusTitle">{card.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ticketsSection">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Recent Tickets</h2>
          <a href="/tickets" className="sectionLink">View All →</a>
        </div>
        <div className="ticketTable">
          <div className="tableHeader">
            <span>ID</span>
            <span>Subject</span>
            <span>Employee</span>
            <span>Category</span>
            <span>Priority</span>
            <span>Company</span>
            <span>Status</span>
          </div>
          {recentTickets.map((ticket, i) => (
            <div key={i} className="tableRow">
              <span className="ticketId">{ticket.id}</span>
              <span className="ticketSubject">{ticket.subject}</span>
              <span className="ticketEmployee">{ticket.employee}</span>
              <span className={`categoryBadge ${ticket.category.toLowerCase()}`}>{ticket.category}</span>
              <span className={`priorityBadge ${ticket.priority.toLowerCase()}`}>{ticket.priority}</span>
              <span className="ticketCompany">{ticket.company}</span>
              <span className={`statusBadge ${ticket.status.toLowerCase().replace(' ', '-')}`}>{ticket.status}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;