using System.Net;
using System.Net.Mail;

namespace dotnet_store.Services;

public interface IEmailService
{
    Task SendEmailAsync(string email, string subject, string message);
}

public class SmtpEmailService : IEmailService
{
    private IConfiguration _configuration;
    public SmtpEmailService(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    public async Task SendEmailAsync(string email, string subject, string message)
    {
        using (var client = new SmtpClient(_configuration["Email:Host"]))
        {
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential(_configuration["Email:Username"], _configuration["Email:Password"]);

            client.Port = 587;
            client.EnableSsl = true;
            var mailMessage = new MailMessage
            {
                From = new MailAddress(_configuration["Email:Username"]!),
                Subject = subject,
                Body = message,
                IsBodyHtml = true
            };
            mailMessage.To.Add(email);
            await client.SendMailAsync(mailMessage);
        }
    }
}
