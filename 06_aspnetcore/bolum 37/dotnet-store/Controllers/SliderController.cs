using dotnet_store.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_store.Controllers;

[Authorize(Roles = "Admin")]
public class SliderController : Controller
{
    private readonly DataContext _context;
    public SliderController(DataContext context)
    {
        _context = context;
    }
    public ActionResult Index()
    {
        return View(_context.Sliderlar.Select(i => new SliderGetModel
        {
            Id = i.Id,
            Baslik = i.Baslik,
            Aktif = i.Aktif,
            Index = i.Index,
            Resim = i.Resim
        }).ToList());
    }

    public ActionResult Create()
    {
        return View();
    }

    [HttpPost]
    public async Task<ActionResult> Create(SliderCreateModel model)
    {
        if (model.Resim == null || model.Resim.Length == 0)
        {
            ModelState.AddModelError("Resim", "Resim seçmelisiniz");
        }

        if (ModelState.IsValid)
        {
            var fileName = Path.GetRandomFileName() + ".jpg";
            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/img", fileName);

            using (var stream = new FileStream(path, FileMode.Create))
            {
                await model.Resim!.CopyToAsync(stream);
            }

            var entity = new Slider()
            {
                Baslik = model.Baslik,
                Aciklama = model.Aciklama,
                Resim = fileName,
                Aktif = model.Aktif,
                Index = model.Index
            };

            _context.Sliderlar.Add(entity);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        return View(model);
    }

    public ActionResult Edit(int id)
    {
        var entity = _context.Sliderlar.Select(i => new SliderEditModel
        {
            Id = i.Id,
            Baslik = i.Baslik,
            Aciklama = i.Aciklama,
            Aktif = i.Aktif,
            ResimAdi = i.Resim,
            Index = i.Index
        }).FirstOrDefault(i => i.Id == id);

        return View(entity);
    }

    [HttpPost]
    public async Task<ActionResult> Edit(int id, SliderEditModel model)
    {
        if (id != model.Id)
        {
            return RedirectToAction("Index");
        }

        if (ModelState.IsValid)
        {
            var entity = _context.Sliderlar.FirstOrDefault(i => i.Id == model.Id);

            if (entity != null)
            {
                if (model.Resim != null)
                {
                    var fileName = Path.GetRandomFileName() + ".jpg";
                    var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/img", fileName);

                    using (var stream = new FileStream(path, FileMode.Create))
                    {
                        await model.Resim!.CopyToAsync(stream);
                    }

                    entity.Resim = fileName;
                }

                entity.Baslik = model.Baslik;
                entity.Aciklama = model.Aciklama;
                entity.Aktif = model.Aktif;
                entity.Index = model.Index;

                _context.SaveChanges();

                TempData["Mesaj"] = $"{entity.Baslik} isimli slider güncellendi.";

                return RedirectToAction("Index");
            }

        }

        return View(model);
    }

    public ActionResult Delete(int? id)
    {
        if (id == null)
        {
            return RedirectToAction("Index");
        }

        var entity = _context.Sliderlar.FirstOrDefault(i => i.Id == id);

        if (entity != null)
        {
            return View(entity);
        }
        return RedirectToAction("Index");
    }

    [HttpPost]
    public ActionResult DeleteConfirm(int? id)
    {
        if (id == null)
        {
            return RedirectToAction("Index");
        }

        var entity = _context.Sliderlar.FirstOrDefault(i => i.Id == id);

        if (entity != null)
        {
            _context.Sliderlar.Remove(entity);
            _context.SaveChanges();

            TempData["Mesaj"] = $"{entity.Baslik} slideri silindi.";
        }
        return RedirectToAction("Index");
    }




}